import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="min-h-16 fixed top-0 right-0 left-0  bg-[rgba(0,20,40,0.95)] blur-xxl flex items-center justify-between px-6 md:px-10">
     
      <div className="text-green-500 [text-shadow:0_0_4px_rgba(0,200,255,0.8)] text-3xl font-bold">
        MARK1
      </div>

    
      <div className="md:hidden">
        {isOpen ? (
          <FaTimes
            onClick={() => setIsOpen(false)}
            className="text-2xl cursor-pointer text-white"
          />
        ) : (
          <FaBars
            onClick={() => setIsOpen(true)}
            className="text-2xl cursor-pointer text-white"
          />
        )}
      </div>

     
      <ul className="hidden md:flex gap-14 text-white">
        <li className="hover:text-green-400 cursor-pointer"><a href="#/">Home</a> </li>
        <li className="hover:text-green-400 cursor-pointer"><a href="/#features">Features</a> </li>
        <li className="hover:text-green-400 cursor-pointer"><a href="#HowitWorks">How it Works</a></li>
      </ul>

     
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[rgba(0,20,40,0.95)] flex flex-col items-center text-white gap-6 py-6 md:hidden shadow-lg">
          <li
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 cursor-pointer"
          >
            Features
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 cursor-pointer"
          >
            How it Works
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
