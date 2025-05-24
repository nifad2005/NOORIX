"use client"
import CarouselComponent from "@/components/utils/Carousel";
import { login } from "@/lib/redux/slices/userSlice";
import { useSelector } from "react-redux";
import Experiments from "./experiments/page";
import Link from "next/link";


export default function Home() {
  
  const user = useSelector((state : any)=>state.user)
  const gallery = useSelector((state:any)=>state.gallery)
  console.log(gallery.gallery)

  return (

    <main className=" min-w-screen min-h-screen text-6xl">
      {/* Hero Section */}
      <div 
      className="xl:flex-row xl:h-auto py-16 md:py-24 flex-col mx-auto items-center flex justify-evenly xl:min-h-20 min-h-[calc(100vh-80px)] gap-8 w-full px-6 sm:px-12 
      transition-all
      duration-300]
      bg-gradient-to-br from-slate-50 to-indigo-100
      ">
        <div className="flex flex-col gap-2 text-center xl:text-left">
          <h1 className="font-bold text-slate-800 text-5xl md:text-7xl" id='title'>NOORIX</h1>
          <p className="text-lg md:text-xl font-serif text-slate-600 max-w-xl">An experimental tech startup where X&I (Experimentation & Innovation) is the foundation of every build.</p>
        </div>
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <CarouselComponent />
        </div>
      </div>

      {/* Experiments Section */}
      <section className="xl:w-[70%] mx-auto mt-32 flex flex-col gap-2">

        <h1 className='text-3xl font-bold'>Experiments</h1>
        {/* <Experiments/> */}
        <Link href="/experiments" className="text-blue-600 font-semibold text-lg hover:underline">See More</Link>
      </section>

      
    </main> 
  );
}
