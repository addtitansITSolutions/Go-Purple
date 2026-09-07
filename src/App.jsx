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
import PrivacyPolicy from './pages/PrivacyPolicy'
import GDPRCompliance from './pages/GDPRCompliance'
import AffiliateMarketing from './pages/services/AffiliateMarketing'
import Ecommerce from './pages/services/Ecommerce'
import PerformanceMarketing from './pages/PerformanceMarketing'
import CreativeAndDesign from './pages/CreativeAndDesign'
import Services from './pages/Services'



const App = () => {
  return (
    <div>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/digital-marketing' element={<DigitalMarketing />} />
          <Route path='/services/affiliate-marketing' element={<AffiliateMarketing />} />
          <Route path='/services/e-commerce' element={<Ecommerce />} />
          <Route path='/services/performance-marketing' element={<PerformanceMarketing />} />
          <Route path='/services/creative-design' element={<CreativeAndDesign />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/gdpr-compliance" element={<GDPRCompliance />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App

