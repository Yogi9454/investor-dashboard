"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        <h1 className="text-xl font-bold tracking-tight">
          InvestPro
        </h1>

        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-blue-400 transition">
            Dashboard
          </Link>
          <Link href="/corporate" className="hover:text-blue-400 transition">
            Corporate
          </Link>
        </div>
      </div>
    </div>
  );
}