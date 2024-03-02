"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useSpring, animated } from "react-spring";
import { FiSearch, FiPhone, FiCamera, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navbarAnimation = useSpring({
    height: isScrolled ? '130px' : '150px',
    background: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 1)",
    boxShadow: isScrolled ? "0 2px 15px rgba(0, 0, 0, 0.1)" : "0 1px 10px rgba(0, 0, 0, 0)",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <animated.div style={navbarAnimation} className="fixed w-full top-0 z-30 transition-all duration-300">
        <div className="lg:hidden flex justify-between items-center p-4">
          <FiMenu onClick={toggleSidebar} className="text-purple-600 hover:text-purple-800 cursor-pointer" />
          <a href="/" className="text-2xl text-gray-700 font-extrabold my-2">
          Flexeere
          </a>
        </div>
        
        {/* Upper row with Media/Contact and Search */}
        <div className="flex justify-between items-center px-4 py-2 lg:px-8">
          <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
            <FiCamera className="text-purple-600 hover:text-purple-800 cursor-pointer" />
            <span className="hidden md:inline text-gray-700">Media</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiPhone className="text-purple-600 hover:text-purple-800 cursor-pointer" />
            <span className="hidden md:inline text-gray-700">Contact</span>
          </div>
        </div>
          <div className="flex items-center border-b-2 border-purple-600">
            <input
              type="text"
              placeholder="Looking for"
              value={search}
              onChange={handleSearchChange}
              className="px-2 py-1 text-gray-700 focus:outline-none bg-transparent w-full"
            />
            <FiSearch className="text-purple-600 hover:text-purple-800 cursor-pointer mx-2" />
          </div>
        </div>
        {/* Lower row with Navigation and Brand - Hidden on smaller screens */}
        <div className="hidden lg:flex justify-between items-center px-4 py-2">
          <div className="flex space-x-4">
            <a href="#" className="font-bold text-gray-700 hover:text-purple-500 transition duration-300">Services</a>
            <a href="#" className="font-bold text-gray-700 hover:text-purple-500 transition duration-300">Projects</a>
            <a href="#" className="font-bold text-gray-700 hover:text-purple-500 transition duration-300">Technology</a>
          </div>
          <a href="/" className="text-3xl text-gray-700 font-extrabold my-2 relative">
          Flexeere
            <span className="absolute left-0 right-0 h-1 bg-purple-600" style={{ bottom: '-0.25rem' }}></span>
            <span className="text-xs font-light absolute left-0 right-0" style={{ bottom: '-1.5rem' }}>VALUES OVER VALUE</span>
          </a>
          <div className="flex space-x-4">
            <a href="#" className="font-bold text-gray-700 hover:text-purple-500 transition duration-300">About Us</a>
            <a href="#" className="font-bold text-gray-700 hover:text-purple-500 transition duration-300">Insights</a>
            <a href="#" className="font-bold text-gray-700 hover:text-purple-500 transition duration-300">Careers</a>
          </div>
        </div>
      </animated.div>

      {/* Sidebar for smaller screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 lg:hidden">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl text-gray-700 font-extrabold my-2">
              ANAROCK
            </a>
            <FiX onClick={toggleSidebar} className="text-purple-600 hover:text-purple-800 cursor-pointer" />
          </div>
          <div className="flex flex-col space-y-4">
            {/* Link styles updated to remove underline and add attractive hover effect */}
            <a href="#" className="font-bold text-gray-700 hover:bg-purple-500 hover:text-white p-2 rounded transition duration-300">Services</a>
            <a href="#" className="font-bold text-gray-700 hover:bg-purple-500 hover:text-white p-2 rounded transition duration-300">Projects</a>
            <a href="#" className="font-bold text-gray-700 hover:bg-purple-500 hover:text-white p-2 rounded transition duration-300">Technology</a>
            <a href="#" className="font-bold text-gray-700 hover:bg-purple-500 hover:text-white p-2 rounded transition duration-300">About Us</a>
            <a href="#" className="font-bold text-gray-700 hover:bg-purple-500 hover:text-white p-2 rounded transition duration-300">Insights</a>
            <a href="#" className="font-bold text-gray-700 hover:bg-purple-500 hover:text-white p-2 rounded transition duration-300">Careers</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;