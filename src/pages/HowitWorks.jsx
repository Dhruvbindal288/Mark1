import React from 'react'
import Work_card from '../components/Work_card'
function HowitWorks() {
  return (
    <div id='HowitWorks' className='min-h-[60vh] w-full bg-gradient-to-r from-[#00453ae6] via-[#008a78] to-green-600'>
    <h1 className="text-2xl md:text-6xl text-center font-medium mb-10">How MARK1 Works </h1> 
    <div className='pb-5 flex gap-2 flex-wrap sm: flex-nowarp md:flex-nowrap items-center justify-center'>
    <Work_card number={1} title={'Solenoid Engine'} description={"Converts electrical energy to mechanical motion via electromagnetic coils, creating controlled magnetic fields."}/>
    <Work_card number={2} title={'Mechanical Energy Generatione'} description={"Controlled activation creates precise mechanical movement through magnetic interaction with plungers."}/>
    <Work_card number={3} title={'Dynamo Generator'} description={"Rotational motion drives the dynamo generator, converting mechanical energy back to electrical power."}/>
    <Work_card number={4} title={'Electrical Output'} description={"Electromagnetic induction generates continuous electrical current, completing the energy cycle."}/>
    </div>
    </div>
  )
}

export default HowitWorks
