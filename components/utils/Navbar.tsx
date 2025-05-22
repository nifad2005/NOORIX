"use client";
import { login, logout } from "@/lib/redux/slices/userSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const { data: session } = useSession();
  const [shouldFetch, setShouldFetch] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  useEffect(() => {
    const setUp = async () => {
      if (session?.user) {
        if (shouldFetch) {
          console.log("sending data : ", session.user);
          const response = await fetch("/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: session.user?.email,
              name: session.user?.name,
              image: session.user?.image,
            }),
          });
          const { user } = await response.json();
          console.log(user)
          dispatch(login(user));
          setShouldFetch(false);
        }
      } else {
        dispatch(logout({}));
      }
    };
    setUp();
  }, [session]);
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link
          href={"/"}
          className="text-xl hover:text-red-800 duration-1000  font-bold text-blue-600"
        >
          NOORIX
        </Link>
      </div>
      {/* Navigation Links */}
      <ul className="flex items-center gap-8">
        <li>
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/experiments"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Experiments
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Gallery
          </Link>
        </li>
      </ul>
      {/* User Avatar */}
      <div className="flex flex-col items-center ">
        {user.isLogedIn ? (
          <>
            <Link
              href="/dashboard"
              className="text-gray-700 flex flex-col items-center hover:text-blue-600 font-medium transition"
            >
              <Image
                width={20}
                height={20}
                src={user.image || ""}
                alt="User Avatar"
                className="h-8 w-8 rounded-full border"
              />
              Dashboard
            </Link>
          </>
        ) : (
          <Link href={"/login"}>Sign up</Link>
        )}
      </div>
    </nav>
  );
}
