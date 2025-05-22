"use client";
import PanelCard from "@/components/dasboard/PanelCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Panel() {
  const user = useSelector((state: any) => state.user);
  const [addPanel, setAddPanel] = useState(false);
  const [notice, setNotice] = useState("Hi Nifad 🙋‍♂️ ");
  const [panels, setPanels] = useState([]);

  const [inputEmail, setInputEmail] = useState("");
  const [inputRole, setInputRole] = useState("#");

  useEffect(() => {
    const fetchPanels = async () => {
      const response = await fetch("/api/users/panels");
      const data = await response.json();
      setPanels(data);
    }
    fetchPanels()
  },[])

  const handleUserRole = async()=>{
    if(user.role !== "Master"){
      alert(`Sorry ${user.name}!\nYou are not authorized to change user role! `);
      return
    }
    if(!inputEmail || !inputRole){
      setNotice("Please enter email and role both ⚠️");
        setInputEmail("");
        setInputRole("#");  
      return
    }
    setNotice("Requesting for update...🔃");
    const response = await fetch("/api/users/panels", {
      method: "POST",
      body: JSON.stringify({
        email: inputEmail,
        role: inputRole,
      }),
    });
    const data = await response.json();
    setPanels(data.panels)
    setNotice(`${data.message}`);
    setInputEmail("");
    setInputRole("#");
    
    }
  const handlePanelOpen = () => {
    setAddPanel(!addPanel)
    setNotice("Hi Nifad 🙋‍♂️ ");
  }
  return (
    <div className="w-full min-h-screen flex flex-col relative items-center justify-center">
      <div className=" w-full min-2 absolute top-0  flex items-center justify-center  duration-300 ">
        <div className="px-12 py-2">
          <button
            onClick={ handlePanelOpen}
            className={`text-2xl bg-slate-500 px-3 absolute right-12 py-2 font-medium rounded-2xl shadow-xl ${
              addPanel && "hidden"
            }`}
          >
            Add New
          </button>
        </div>
      </div>
      {addPanel && (
        <>
          <div className="h-full w-full  flex items-center justify-center absolute z-20">
            <div className="bg-blue-600/10 backdrop-blur-xl rounded-4xl  px-4 py-4 shadow-2xl h-[700px] w-[800px]  flex  ">
              <div
                onClick={() => setAddPanel(false)}
                className=" text-3xl text-slate-700 duration-300 right-6 cursor-pointer hover:text-slate-900 font-semibold  absolute"
              >
                X
              </div>
              <div className=" rounded-4xl  px-2 py-4  w-full  h-full flex flex-col gap-8 items-center
                justify-center
              ">
                <div className="text-xl font-medium text-slate-800 *:flex *:items-center *:flex-col">
                    {user.role!== "Master" ? <div className="" >
                         <h1 className="text-yellow-800 font-bold text-3xl absolute top-12">View only for User/Admin</h1>
                        <p className="text-2xl font-medium text-slate-900">SOORY!</p>
                        <h1>This page only access for <span className="font-bold text-yellow-800 ">MASTER</span></h1>
                    </div> :<div>
                        <h1 className="text-yellow-800 font-bold text-2xl absolute top-12">Master Panel</h1>
                        <p>{notice}</p>
                    </div> 
                    }
                </div>
                {user && (
                  <div className="gap-2 flex  w-full justify-center">
                    <input type="text"
                    value={inputEmail}
                     onChange={(e) => setInputEmail(e.target.value)}
                     placeholder="Enter email" className="px-3 py-3 rounded-3xl ring-1 ring-slate-400 focus:ring-slate-500 outline-none w-[400px] text-lg font-medium text-slate-800" />
                    <select
                     onChange={(e) => setInputRole(e.target.value)}
                     value={inputRole}
                     name="role" id="" className="text-lg outline-none  font-medium ring-1 ring-slate-400 rounded-2xl px-4" >
                            <option value="#" disabled>Select role</option>
                         <option value="User">User</option>
                        <option value="Admin" >Admin</option>
                    </select>
                    <button
                    onClick={handleUserRole}
                    className="px-6 py-3 rounded-3xl  bg-slate-300 font-medium cursor-pointer hover:bg-slate-400/60 duration-200 ">Update Role</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="min-h-96 min-w-92 bg-slate-300 rounded-4xl flex flex-col gap-3  px-2 py-4 shadow-2xl">
          <h1 className="text-2xl font-semibold w-full text-slate-700  text-center pb-2">Panels</h1>
        <div className="w-full min-h-12 bg-white/70 backdrop-blur-3xl py-1 px-2 rounded-3xl shadow-xl flex gap-1">
          <div className=" flex items-center ">
            <div className="rounded-full overflow-hidden h-12 w-12">
              <Image src={"https://lh3.googleusercontent.com/a/ACg8ocJYYOQInJwQK3SvyRhe5YmK0fleSMzbCI_OoWk-wz9TsWZoFrlq=s96-c"} alt="user" width={100} height={100} />
            </div>
          </div>
          <div className="px-1 flex flex-col  ">
            <h1 className="text-xl font-semibold  ">Nifad Uzzaman</h1>
            <h3 className="text-lg -mt-1 text-slate-500 ">nifaduzzaman2005@gmail.com</h3>
          </div>
          <div className="flex items-center ">
            <h3 className="text-lg px-2 py-1 bg-slate-300 rounded-md text-fuchsia-900 font-medium">
              Master
            </h3>
          </div>
        </div>
        {
          panels?.map((panel : any)=>(<PanelCard {...panel } key={panel._id} userRole={user.role} />))
        }
      </div>
    </div>
  );
}
