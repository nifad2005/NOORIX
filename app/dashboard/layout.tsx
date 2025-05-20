import React from 'react'
import SideBar from '@/components/dasboard/SideBar'

export default function RootLayout({children}:{children:any}) {
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
