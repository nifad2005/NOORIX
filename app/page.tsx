"use client"
// HomePage.tsx (This component can be used in your Next.js pages or as a component)
import React from 'react';

// Next.js Component for NOORIX Homepage
function HomePage() {
  return (
    // Main container with flexible column layout to arrange elements
    <div className="min-h-screen bg-white text-black font-['Inter'] flex flex-col items-center p-4 sm:p-6 lg:p-8">
      {/* Navigation (Navbar - items only) - Placed at the top, content aligned to the right */}
      <nav className="w-full flex justify-end mb-8"> {/* Changed justify-center to justify-end */}
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-gray-700 text-lg font-medium">
          <li className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200">
            <a href="https://noorix-hub.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
              NOORIX Hub
            </a>
          </li>
          <li className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200">
            <a href="#" onClick={() => alert('Navigating to About Us page!')} className="hover:underline"> {/* Replace with actual navigation */}
              About Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content Area - flex-grow to fill available space */}
      <main className="flex-grow flex flex-col items-center justify-center text-center max-w-4xl w-full">
        {/* NOORIX Title - Styled with a subtle text shadow and accent color */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 drop-shadow-md"> {/* Added gradient classes and text-transparent */}
          NOORIX
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-4 sm:mb-4 leading-relaxed max-w-2xl">
          An experimental tech startup where X&I (Experimentation & Innovation) is the foundation of every build.
        </p>

        {/* About Us Button */}
        <button
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => alert('Navigating to About Us page!')} // Replace with actual navigation
        >
          About Us
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-50 text-gray-600 py-6 text-sm flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 rounded-xl shadow-inner mt-8">
        <div className="mb-4 sm:mb-0">NOORIX</div>
        <ul className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
          <li>
            <a href="#" className="hover:text-blue-600 transition duration-200" onClick={() => alert('Navigating to About Us page!')}> {/* Replace with actual navigation */}
              About Us
            </a>
          </li>
          <li>
            <a href="https://noorix-hub.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-200">
              NOORIX Hub
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition duration-200" onClick={() => alert('Navigating to Products page!')}> {/* Replace with actual navigation */}
              Products
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default HomePage;
