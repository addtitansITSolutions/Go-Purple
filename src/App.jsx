import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import "./App.css"



const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App

