"use client";

import { useEffect, useState } from "react";

type Transaction = {
  id: number;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
  description: string;
};

const Page = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      setTransactions(data);
    };
    fetchData();
  }, []);

  const filtered = transactions
    .filter((t) => t.category.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => {
      if (filter === "income") return t.type === "income";
      if (filter === "expense") return t.type === "expense";
      return true;
    });

  return (
    <div className="mx-auto w-fit min-h-screen px-4 py-2">
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-fit outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="flex gap-2">
          {["all", "income", "expense"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === type ? "bg-primary" : "hover:bg-secondary"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="text-sm ">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Category</th>
              <th className="p-3">Description</th>
              <th className="p-3">Type</th>
              <th className="p-3 text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-t  transition">
                <td className="p-3 text-sm ">{t.date}</td>

                <td className="p-3 font-medium">{t.category}</td>

                <td className="p-3 text-sm">{t.description}</td>

                <td className="p-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      t.type === "income" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>

                <td
                  className={`p-3 text-right font-semibold ${
                    t.type === "income" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}₹{t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No transactions found
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
