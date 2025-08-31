import React from "react";
import { FaBolt } from "react-icons/fa";

function Card({heading,text}) {
  return (
    <div className="w-full  md:w-80 lg:w-96 bg-green-100 rounded-3xl border-t-4 border-green-400 p-6 shadow-md hover:shadow-lg transition">
      <FaBolt className="text-yellow-400 text-3xl mb-2" />
      <h2 className="text-lg sm:text-xl md:text-2xl mb-4 font-medium">
       {heading}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">
       {text}
      </p>
    </div>
  );
}

export default Card;
