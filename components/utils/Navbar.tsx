"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Navbar() {
  const {data:session} = useSession()
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href={"/"} className="text-xl hover:text-red-800 duration-1000  font-bold text-blue-600">NOORIX</Link>
      </div>
      {/* Navigation Links */}
      <ul className="flex items-center gap-8">
        <li>
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
        </li>
          <li>
          <Link href="/experiments" className="text-gray-700 hover:text-blue-600 font-medium transition">Experiments</Link>
        </li>
         <li>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition">Products</Link>
        </li>
       
      </ul>
      {/* User Avatar */}
      <div className="flex flex-col items-center ">
        {
          session ?(<>
            <Link href="/dashboard" className="text-gray-700 flex flex-col items-center hover:text-blue-600 font-medium transition">
              <Image width={20} height={20} src={session.user?.image || ""} alt="User Avatar" className="h-8 w-8 rounded-full border" />
              Dashboard
            </Link>
          </>
          ):(
            <Link href={'/login'}>Sign up</Link>
          )
        }
      </div>
    </nav>
  )
}