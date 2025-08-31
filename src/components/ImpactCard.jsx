import React from 'react'

function ImpactCard({percent,title}) {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-66 md:h-30 
                      rounded-full border-4 border-green-400 
                      flex items-center justify-center 
                      bg-[#EFF2F4] shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500">
         {percent}
        </h1>
      </div>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 font-medium text-center">
       {title}
      </p>
    </div>
  )
}

export default ImpactCard
