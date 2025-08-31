/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-18 bg-[rgba(0,20,40,0.95)] w-full flex items-center justify-between px-6 md:px-10 z-1000">
      
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

      <ul className="hidden md:flex text-white gap-14">
        <li className="hover:text-green-400 cursor-pointer">Home</li>
        <li className="hover:text-green-400 cursor-pointer">Features</li>
        <li className="hover:text-green-400 cursor-pointer">How it Works</li>
      </ul>

      
      {isOpen && (
        <ul className="absolute top-14 left-0 w-full bg-[rgba(0,20,40,0.95)] flex flex-col items-center text-white gap-6 py-6 md:hidden">
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
