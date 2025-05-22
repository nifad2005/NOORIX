"use client"
import React from 'react'
import SideBar from '@/components/dasboard/SideBar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'


export default function RootLayout({children}:{children:any}) {
  const {data : session} = useSession()
  if(!session) redirect('/login')
  return (<div className='flex'>
    <div className="w-64 bg-white shadow-md flex flex-col p-6 min-h-screen">
        <SideBar/>
    </div>
    <div className='flex-1'>
        {children}
    </div>
    </div>
  )
}
