import CarouselComponent from "@/components/utils/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-w-screen min-h-screen text-6xl">
      <div 
      className="xl:flex-row  xl:h-auto py-12 flex-col mx-auto items-center flex justify-evenly xl:min-h-20 min-h-[1000px] gap-4 w-full px-12 
      transition-all
      duration-300]
      ">
      <div className="flex flex-col  gap-1">
        <h1 className="font-bold text-slate-800">NOORIX</h1>
        <p className="text-[18px] font-serif text-slate-500 max-w-xl">An experimental tech startup where X&I (Experimentation & Innovation) is the foundation of every build.</p>
      </div>
      <CarouselComponent />
      </div>
      
    </main> 
  );
}
