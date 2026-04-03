import user from "@/lib/user";

export async function GET() {
  return Response.json(user);
}
