import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import HowitWorks from './pages/HowitWorks'
function App() {
  return (
    <div>
      <Navbar/>
      <Home></Home>
      <Features></Features>
      <HowitWorks></HowitWorks>
    </div>
  )
}

export default App
App