import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import HowitWorks from './pages/HowitWorks'
import EnvironmentalImpact from './pages/EnvironmentalImpact'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Home></Home>
      <Features></Features>
      <HowitWorks></HowitWorks>
      <EnvironmentalImpact/>
      <Footer/>
    </div>
  )
}

export default App
App