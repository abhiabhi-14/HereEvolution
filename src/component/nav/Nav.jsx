import React, { useState, useEffect } from 'react';
import logo from "../nav/img/Designer3.png"
import '../nav/NavIndex.css'
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

function StickyNav() {
  const [percent, setPercent] = useState(0);
  const [selectedCity, setSelectedCity] = useState('');
  const cities = ['Hospitals', 'Restaurant', 'Hotels', 'Basic', 'Near'];

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to construct the URL based on selected city
  const constructServiceUrl = () => {
    const city = selectedCity ? String(selectedCity) : ''; // Ensure selectedCity is a string before calling toLowerCase()
    console.log(`service${city}`);
    return `/service${city}`;
  };


  return (
    <div className="sticky-nav mt-12 z-50 ">
      <nav className="flex justify-around py-2 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 ">
        <div className="flex items-center">
          <a className="cursor-pointer">
            <div className="text-2xl font-medium text-blue-500 flex">
              <img className="object-cover h-12 w-12 mx-3" src={logo} alt="Store Logo" />
              <h3 className='text-black navhead my-2'>NEAR BY ME</h3>
            </div>
          </a>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <NavLink to='/' className={({ isActive }) => `flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 ${isActive ? "text-blue-500" : "text-gray-600"} `}>
            Home
          </NavLink>

          <div className="card flex justify-content-center text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities.map(city => ({ label: city, value: city }))} // Map cities to {label, value} objects
              placeholder="Service"
              className="w-full md:w-14rem"
              checkmark={true}
              highlightOnSelect={false}
            />
            <NavLink
              to={constructServiceUrl()} // Use function to construct URL dynamically
              className={({ isActive }) => `flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 ${isActive ? "text-blue-500" : "text-gray-600"} `}
            >
              {constructServiceUrl()}
            </NavLink>

          </div>

          <NavLink to='/about' className={({ isActive }) => `flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 ${isActive ? "text-blue-500" : "text-gray-600"}`}>
            About Us
          </NavLink>
        </div>
      </nav>
      <div className="fixed inset-x-0 top-0 z-50 h-1 mt-0.5 bg-red-500" style={{ width: `${percent}%` }}></div>
    </div>
  );
}

export default StickyNav;
