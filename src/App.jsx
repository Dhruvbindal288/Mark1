import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import HowitWorks from './pages/HowitWorks'
import EnvironmentalImpact from './pages/EnvironmentalImpact'
import Footer from './components/Footer'
import { useEffect } from 'react'
function App() {
    useEffect(() => {
   
    window.history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  }, []);
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
