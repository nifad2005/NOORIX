"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function SideBar() {
  const user = useSelector((state: any) => state.user);
  return (
    <>
      <div className="mb-8 w">
        <div className="flex gap-5 items-end ">
          <div className="h-10 aspect-square rounded-full overflow-hidden ">
            <Image
              className="text-gray-400"
              src={user.image}
              alt={user.name}
              width={50}
              height={50}
            />
          </div>
          <div>

          <h3 className="text-md px-4 py-1   bg-slate-200 rounded-md text-fuchsia-900 font-medium">
              {user.role}
            </h3>
          </div>
        </div>
        <span className="text-xl font-bold text-blue-500/80">{user.name}</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Dashboard Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/galary"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Add Galary
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/new-experiment"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Add Experiment
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/new-product"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/panel"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Control Panel
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mb-32">
        <button
          onClick={() => signOut()}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Logout
        </button>
      </div>
    </>
  );
}
