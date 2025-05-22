"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";


export default function SideBar() {
  const user = useSelector((state: any) => state.user);
  if(!user)redirect('/login')
  const barItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "New Gallery",
      path: "/dashboard/galary",
    },
    {
      name: "New Product",
      path: "/dashboard/new-product",
    },
    {
      name: "New Experiment",
      path: "/dashboard/new-experiment",
    },
    {
      name: "Control Panel",
      path: "/dashboard/panel",
    },
  ]
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
          {
            barItems.map((item, index) => (<>
              <li>
              <Link
                href={item.path}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.name}
              </Link>
            </li>
            </>))
          }
        </ul>
      </nav>
      <div className="mb-32">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Logout
        </button>
      </div>
    </>
  );
}
