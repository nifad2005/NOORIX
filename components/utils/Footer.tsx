import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">NOORIX</h2>
          <p className="text-gray-400 mt-2">Empowering innovation and creativity through technology.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
            <li><Link href="/experiments" className="text-gray-400 hover:text-white">Experiments</Link></li>
            <li><Link href="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
            <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zM7.188 20.452H3.548V9.034h3.64v11.418zM5.368 7.548a2.11 2.11 0 110-4.22 2.11 2.11 0 010 4.22zm15.084 12.904h-3.64v-5.6c0-1.336-.027-3.056-1.863-3.056-1.864 0-2.15 1.454-2.15 2.957v5.699h-3.64V9.034h3.494v1.561h.05c.487-.922 1.677-1.893 3.452-1.893 3.692 0 4.372 2.43 4.372 5.59v6.16z" />
              </svg>
            </a>
            
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c-5.488 0-9.937 4.448-9.937 9.937 0 4.389 3.584 8.031 8.2 9.637.6.111.82-.26.82-.577v-2.165c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.815 1.102.815 2.222v3.293c0 .32.218.694.825.576 4.615-1.607 8.198-5.248 8.198-9.637 0-5.489-4.448-9.937-9.937-9.937z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} NOORIX. All rights reserved.
      </div>
    </footer>
  );
}