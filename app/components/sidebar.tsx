import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-48  h-screen border-r">
      <h1 className="py-4 px-2 font-bold">Demo</h1>
      <section className="flex flex-col">
        <Link href="/name">
          <button>Users</button>
        </Link>
        <Link href="/email">
          <button>Email</button>
        </Link>
        <Link href="/leaderboard">
          <button>Leaderboard</button>
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
