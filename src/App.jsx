import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import "./App.css"
import DigitalMarketing from './pages/services/DigitalMarketing'
import Project from './pages/Project'
import ScrollToTop from "./components/ScrollToTop";



const App = () => {
  return (
    <div>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services/digital-marketing' element={<DigitalMarketing />} />
          <Route path="/projects" element={<Project />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App

