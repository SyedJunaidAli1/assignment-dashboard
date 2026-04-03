"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  points: number;
}

const Page = () => {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/user");
      const data = await res.json();
      setUser(data);
    };

    fetchData();
  }, [setUser]);

  return (
    <div className="flex flex-col items-center min-h-screen  w-full px-4 py-6 ">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <div className="w-full max-w-2xl flex flex-col gap-3">
        {user.map((u) => (
          <div
            key={u.id}
            className="flex items-center justify-between border rounded-2xl bg-primary px-4 py-3 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div>
                <p className="font-semibold">{u.name}</p>
                <p className="text-sm">{u.email}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm">Points</p>
              <p className="font-bold text-lg">{u.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
