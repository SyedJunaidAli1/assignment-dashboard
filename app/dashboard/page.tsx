"use client";

import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  type: "income" | "expense";
  amount: number;
  date: string;
}

const Page = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then(setTransactions);
  }, []);

  const income = transactions
    .filter((t: any) => t.type === "income")
    .reduce((acc: number, t: any) => acc + t.amount, 0);

  const expense = transactions
    .filter((t: any) => t.type === "expense")
    .reduce((acc: number, t: any) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="p-6 min-h-screen w-fit mx-auto">
      <h1 className="text-2xl text-center font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className=" p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Balance</p>
          <p className="text-xl font-bold">₹{balance}</p>
        </div>

        <div className=" p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Income</p>
          <p className="text-xl font-bold text-green-600">₹{income}</p>
        </div>

        <div className=" p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Expenses</p>
          <p className="text-xl font-bold text-red-500">₹{expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
