import React from "react";

function Footer() {
  return (
    <div className="min-h-[20vh] bg-[rgba(0,20,40,0.95)] w-full text-white p-6">

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        
       
        <div className="text-center ">
          <h2 className="text-xl font-semibold mb-2">Mark1</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Revolutionizing Energy Sustainability through <br />
            Regenerative Energy Generation Techniques <br />
            for a Greener Tomorrow.
          </p>
        </div>

       
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Innovation</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Innovate for 360 Sustainable Energy <br />
            Solutions Green Technology
          </p>
        </div>
      </div>

      <hr className="mt-5"/>
      <p className="text-center text-xs md:text-sm mt-6 opacity-80">
        © 2025 Dhruv Bindal. All rights reserved. Building a sustainable future, one innovation at a time.
      </p>
    </div>
  );
}

export default Footer;
