"use client";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  pdf: string;
}

const Page = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("api/courses");
      const data = await res.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 w-full">
      <h1 className="text-2xl font-bold text-center mb-8">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg p-5 bg-primary shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">{course.title}</h2>

              <p className="text-sm mb-4">{course.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs px-2 py-1 rounded-full">PDF</span>

              <a
                href={course.pdf}
                target="_blank"
                className="text-sm font-medium text-blue-500 hover:underline"
              >
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
