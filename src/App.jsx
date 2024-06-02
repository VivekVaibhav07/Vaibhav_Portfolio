import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
//import { Route, Router, Routes } from 'react-router-dom' 
import { BrowserRouter ,Route,Routes,Router } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Education from './Pages/Education'
import Projects from './Pages/projects'
import ContactSection from './Pages/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white ">

       <Navbar />
       <Home/>
       <About/>
       <Skills/>
       <Education/>
       <Projects/>
       <ContactSection/>
    </div>
      
    
  )
}

export default App
