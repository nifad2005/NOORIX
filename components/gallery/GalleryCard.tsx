import Image from 'next/image'
import React, { useState } from 'react'

export default function GalleryCard({gallery}:{gallery:any}) {
    const[imageIsOpen, setImageIsOpen] = useState(false)

 
  return (
  <div className="w-3xl mx-auto grid   py-10 space-y-8">
        <div  className="bg-slate-100  rounded-lg h-[600px] shadow p-6">
          <div className="flex items-center  justify-between mb-2">
            <div className='flex  gap-1 items-center '>
            <Image src={gallery.userImage} className='rounded-full ' alt={gallery.userName} width={30} height={3}/>
            <span className="text-blue-600 font-semibold">{gallery.userName}</span>
            </div>
            <span className="text-gray-400 text-sm">
              {gallery.date ? new Date(gallery.date).toLocaleDateString() : ''}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{gallery.title}</h1>
          <div className=' h-[80%]  w-full flex justify-center overflow-hidden   ring-slate-400'>
            
            <div className=' rounded-md overflow-hidden border-t-2 border-slate-500 py-[0.1px]'>
            <Image onClick={()=>setImageIsOpen(!imageIsOpen)} src={gallery.image} alt={gallery.title} width={500} height={500} className='h-full w-auto   brightness-95 hover:brightness-100 duration-200 active:brightness-95 cursor-zoom-in '/>
            </div>
          </div>
          </div>
        {
            imageIsOpen?(<div className='w-full z-20   h-full fixed top-0 left-0 cursor-zoom-out' onClick={()=>setImageIsOpen(false)}>
                <div className='w-full h-full bg-slate-800 opacity-50 absolute'/>
                <div className='p-44 pt-20 shadow-2xl shadow-green-300 h-screen rounded-lg  overflow-hidden flex items-center justify-center z-10 relative'>
                <Image
                loading='lazy'  
                className='w-auto h-auto shadow-2xl' src={gallery.image} alt={gallery.title} width={100} height={100}/>
                </div>
            </div>):null
        }
  </div>
)
}
