import React from 'react'
import ImpactCard from '../components/ImpactCard'
import { FaInfinity } from "react-icons/fa";
function EnvironmentalImpact() {
  return (
    <div className='min-h-[60vh] bg-gray-200'>
       <h1 className="md:text-6xl text-center font-medium mb-10">Environmental imapct </h1>
       <div className='flex flex-wrap gap-2'>
<ImpactCard percent={"0%"} title={"Carbon Emission"} />
<ImpactCard percent={"100%"} title={"Renewable Energy"}/>
<ImpactCard percent={<FaInfinity className="text-green-500 text-2xl sm:text-3xl md:text-4xl" />} title={"Energy Sustainability"}/>
<ImpactCard percent={"24/7"} title={"Power Generation"}/>
</div>
    </div>
  )
}

export default EnvironmentalImpact
