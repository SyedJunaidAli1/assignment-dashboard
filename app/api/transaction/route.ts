import transactions from "@/lib/transaction";

export async function GET() {
  return Response.json(transactions);
}
