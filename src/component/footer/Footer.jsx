// Footer.js
import React from 'react';
import logo from'./Designer3.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pb-3 bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">NEAR BY NOW</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link to="/about" className="hover:text-yellow-300 me-4">About</Link>
            </li>
            
            
            <li>
              <Link to="/" className="hover:text-yellow-300">Home</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700" />
        <span className="text-sm text-gray-500 sm:text-center">© 2024 </span><a href="/" className="hover:text-yellow-300">Nearby Now™</a>. <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
}