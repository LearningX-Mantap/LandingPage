import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Facility from './components/Facility'
import Faq from './components/Faq'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Facility/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
