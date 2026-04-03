"use client";
import { useEffect, useState } from "react";

interface LeaderboardEntry {
  name: string;
  points: number;
  id: number;
  email: string;
}

const Page = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("api/leaderboard");
      const data = await res.json();
      setLeaderboard(data);
    };
    fetchdata();
  }, []);

  const sortedLeaderboard = [...leaderboard].sort(
    (a, b) => b.points - a.points,
  );

  return (
    <div className="min-h-screen w-full px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-8">Leaderboard</h1>
      <div className="flex justify-center items-end gap-4 mb-10">
        {sortedLeaderboard.slice(0, 3).map((user, index) => {
          return (
            <div
              key={user.id}
              className="flex flex-col items-center justify-end bg-primary border p-4 w-24 rounded-2xl shadow-md"
            >
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm">{user.points} pts</p>
              <p className="text-xs mb-2">#{index + 1}</p>
            </div>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {sortedLeaderboard.slice(3).map((user, index) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-primary border rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <p className="font-semibold  w-6"># {index + 4}</p>

              <div>
                <p className="font-medium">{user.name}</p>
              </div>
            </div>

            <p className="font-bold">{user.points} pts</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
