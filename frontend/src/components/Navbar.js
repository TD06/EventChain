import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-xl font-bold">EventChain</a>
        </Link>
        <div className="flex gap-4">
          <Link href="/my-tickets">
            <a className="hover:underline">My Tickets</a>
          </Link>
          <Link href="/verify">
            <a className="hover:underline">Verify Ticket</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}