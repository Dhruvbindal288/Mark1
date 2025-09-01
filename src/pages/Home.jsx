import React from "react";

function Home() {
  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-r from-[#00453ae6] via-[#008a78] to-green-400 flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left">
      
      <div className="px-6 md:px-10 flex-5 md:flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4 md:mb-6">
          Revolutionizing
        </h1>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-green-500 [text-shadow:0_0_3px_rgba(0,200,255,0.8)]">
          Energy <br className="hidden sm:block" />
          Sustainability
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-5 md:mt-7 max-w-3xl mx-auto md:mx-0">
          MARK1 is a groundbreaking self-sustaining power <br /> generation system
          that creates a never-ending cycle of energy through intelligent
          regenerative techniques.
        </p>

        <button className="text-white rounded-3xl border px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 mt-6 md:mt-10 bg-green-500 shadow-lg hover:bg-green-600 transition">
          <a href="#innovativeFeature">Discover the feature</a>
        </button>
      </div>

      
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="https://imgs.search.brave.com/vqcAU9reYg1MmoziQDZldbqOq7zowPKBYMzmStQpMmw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvcmVuZXdh/YmxlLWVuZXJneS1p/bGx1c3RyYXRpb24t/ZG93bmxvYWQtaW4t/c3ZnLXBuZy1naWYt/ZmlsZS1mb3JtYXRz/LS1lY29sb2dpY2Fs/LXN1c3RhaW5hYmxl/LXN1cHBseS1zb2xh/ci1wYW5lbC1lZmZp/Y2llbmN5LXRoZS1j/aXR5LXBhY2stbmF0/dXJlLWlsbHVzdHJh/dGlvbnMtNzA1MDE1/Mi5wbmc"
          alt="Energy Illustration"
          className="w-full  h-full "
        />
      </div>
    </div>
  );
}

export default Home;
