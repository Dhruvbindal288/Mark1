import React from "react";

function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#00453ae6] via-[#008a78] to-green-400 flex items-center">
      <div className="px-6 md:px-10">
        
       
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4 md:mb-6">
          Revolutionizing
        </h1>

        
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-green-500 [text-shadow:0_0_3px_rgba(0,200,255,0.8)]">
          Energy <br className="hidden sm:block" />
          Sustainability
        </h1>

       
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-5 md:mt-7 max-w-3xl">
          MARK1 is a groundbreaking self-sustaining power <br /> generation system
          that creates a never-ending cycle of energy through intelligent
          regenerative techniques.
        </p>

        
        <button className="text-white rounded-3xl border px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 mt-6 md:mt-10 bg-green-500 shadow-lg hover:bg-green-600 transition">
          Discover the feature
        </button>
      </div>
    </div>
  );
}

export default Home;
