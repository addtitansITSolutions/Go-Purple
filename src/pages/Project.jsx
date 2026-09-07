import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectHero from '../sections/projects/ProjectHero'
import FeaturedProject from '../sections/projects/FeaturedProject'
import WhatMakesItWork from '../sections/projects/WhatMakesItWork'

const Project = () => {
  return (
    <div>
      <Navbar forceScrolled/>
       <ProjectHero />
       <FeaturedProject />
       <WhatMakesItWork />
      <Footer />
    </div>
  )
}

export default Project
