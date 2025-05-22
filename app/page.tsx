"use client"
import CarouselComponent from "@/components/utils/Carousel";
import { login } from "@/lib/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  const dispatch = useDispatch()
  const user = useSelector((state : any)=>state.user)

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
          <h1 className="font-bold text-slate-800 text-5xl md:text-7xl">NOORIX</h1>
          <p className="text-lg md:text-xl font-serif text-slate-600 max-w-xl">An experimental tech startup where X&I (Experimentation & Innovation) is the foundation of every build.</p>
        </div>
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <CarouselComponent />
        </div>
      </div>

      
    </main> 
  );
}
