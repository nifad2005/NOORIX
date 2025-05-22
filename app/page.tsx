"use client"
import CarouselComponent from "@/components/utils/Carousel";
import { login } from "@/lib/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  const dispatch = useDispatch()
  const user = useSelector((state : any)=>state.user)
  console.log(user)
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

      {/* Features Section
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why NOORIX?</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Discover the unique approach we bring to technology and innovation.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Experimentation First</h3>
              <p className="text-md text-slate-700">We believe in rapid prototyping and learning through doing. Every project is an experiment pushing boundaries.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Innovation Driven</h3>
              <p className="text-md text-slate-700">Our core is to innovate, seeking novel solutions to complex problems and creating new possibilities.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Community Focused</h3>
              <p className="text-md text-slate-700">Building a community around shared learning and open exploration in technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore with Us?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">Join our journey of experimentation and innovation. Let's build the future, together.</p>
          <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-slate-100 transition-colors text-lg">
            Get In Touch
          </button>
        </div>
      </section> */} */
      
    </main> 
  );
}
