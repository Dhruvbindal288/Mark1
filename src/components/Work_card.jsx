import React from "react";

function WorkCard({ number, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
     
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white text-xl font-bold  mb-4">
        {number}
      </div>

     
      <h2 className="text-lg md:text-xl font-semibold text-green-400 mb-2">
        {title}
      </h2>

      
      <p className="text-gray-200 text-sm md:text-base max-w-xs">
        {description}
      </p>
    </div>
  );
}

export default WorkCard;
