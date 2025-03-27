import { useState } from 'react'
import Contact from "./Components/Contact"
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About'

function App() {
 

  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element= {<About />} />
      </Routes>
     
      
      
    
    </BrowserRouter>
  )
}

export default App
