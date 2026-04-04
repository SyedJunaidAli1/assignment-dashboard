"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Users,
  Trophy,
  BookOpen,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const navItems = [
  { name: "Users", href: "/user", icon: Users },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Courses", href: "/courses", icon: BookOpen },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${
        collapsed ? "w-12" : "w-60"
      } min-h-screen border-r flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        <div className="flex items-center justify-between px-3 py-4">
          {!collapsed && <h1 className="text-lg font-bold">Demo</h1>}

          <button onClick={() => setCollapsed(!collapsed)} className=" rounded">
            {collapsed ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center ${
                  collapsed ? "justify-center" : "gap-3"
                } px-3 py-2 rounded-lg text-sm transition ${
                  isActive ? "bg-secondary" : "hover:bg-primary"
                }`}
              >
                <Icon size={20} />

                {!collapsed && (
                  <span className="font-semibold">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="py-2 border-t">
        <button
          className={`flex items-center ${
            collapsed ? "justify-center" : "gap-3"
          } px-3 py-2 w-full text-sm hover:bg-primary rounded-lg transition`}
        >
          <Settings size={20} />
          {!collapsed && "Settings"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
