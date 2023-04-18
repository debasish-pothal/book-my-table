"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 py-2 px-3 text-center">
        Book My Table
      </Link>
      <div>
        <div className="flex">
          <button className="bg-blue-400 text-white border px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
            Sign in
          </button>
          <button className="text-black border px-3 py-2 rounded-md text-sm font-medium ml-2 hover:cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
