import courses from "@/lib/courses";

export async function GET() {
  return Response.json(courses);
}
