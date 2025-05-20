"use client"
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function SideBar() {
  return (
  <>
    <div className="mb-8">
          <span className="text-2xl font-bold text-blue-600">NOORIX</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard Home</Link>
            </li>
             <li>
              <Link href="/dashboard/new-experiment" className="text-gray-700 hover:text-blue-600 font-medium">Add Experiment</Link>
            </li>
             <li>
              <Link href="/dashboard/new-product" className="text-gray-700 hover:text-blue-600 font-medium">Add Product</Link>
            </li>
          

          </ul>
        </nav>
        <div className="mt-8">
          <button onClick={()=>signOut()} className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Logout</button>
    </div>
    </>
  )
}
