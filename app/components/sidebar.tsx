"use client";

import { Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Users", href: "/user" },
  { name: "Leaderboard", href: "/leaderboard" },
];

const Sidebar = () => {
  return (
    <div className="w-56 h-screen border-r flex flex-col justify-between">
      <div>
        <Link href="/">
          <h1 className="py-5 px-4 font-bold text-lg">Demo</h1>
        </Link>

        <nav className="flex flex-col gap-1 px-2">
          {navItems.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition hover:bg-primary"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-3">
        <button className="flex items-center gap-3 px-4 py-2 text-sm w-full hover:bg-primary rounded-lg">
          <Settings size={16} />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
