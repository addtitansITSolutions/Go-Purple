import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectHero from '../sections/projects/ProjectHero'
import FeaturedProject from '../sections/projects/FeaturedProject'

const Project = () => {
  return (
    <div>
      <Navbar forceScrolled/>
       <ProjectHero />
       <FeaturedProject />
      <Footer />
    </div>
  )
}

export default Project
