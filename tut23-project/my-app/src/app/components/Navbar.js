import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-11 py-3 rounded-xl ">
      <Link className="text-white font-bold " href={"/"}>
        Home
      </Link>
      <Link className="bg-white p-2 rounded-lg " href={"/AddTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
