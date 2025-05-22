import Image from 'next/image'
import React from 'react'

export default function PanelCard({
    name,email,image,role, userRole
}:any) {
  return (
    <div className={`w-full min-h-12  backdrop-blur-3xl py-1 px-2 rounded-3xl shadow-xl flex gap-1 ${userRole === role ? " bg-white/30" : "bg-white/50"}`}>
              <div className=" flex items-center ">
                <div className={`rounded-full overflow-hidden  ${userRole === role ? "border-3 border-green-600 h-13 w-13" : " h-12 w-12"}`}>
                  <Image src={image} alt="user" width={100} height={100} />
                </div>
              </div>
              <div className="px-1 flex flex-col  ">
                <h1 className="text-xl font-semibold  ">{name}</h1>
                <h3 className="text-lg -mt-1 text-slate-500 ">{email}</h3>
              </div>
              <div className="flex items-center absolute right-2 top-3">
                <h3 className="text-lg px-2 py-1 bg-slate-300 rounded-md text-fuchsia-900 font-medium">
                  {role}
                </h3>
              </div>
            </div>
  )
}
