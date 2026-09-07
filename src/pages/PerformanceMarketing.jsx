import React from 'react'
import Navbar from '../components/Navbar'
import PerformanceMarketingHero from '../sections/PerformanceMarketing/PerformanceMarketingHero'
import PerformanceMarketingIntro from '../sections/PerformanceMarketing/PerformanceMarketingIntro'
import PerformanceMarketingCTA from '../sections/PerformanceMarketing/PerformanceMarketingCTA'
import Footer from '../components/Footer'

const PerformanceMarketing = () => {
  return (
    <>
      <Navbar forceScrolled/>
      <main>
        <PerformanceMarketingHero />
        <PerformanceMarketingIntro />
        <PerformanceMarketingCTA />
      </main>
      <Footer />
    </>
  )
}

export default PerformanceMarketing
