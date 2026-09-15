import React from 'react'
import Navbar from '../../components/Navbar'
import PerformanceMarketingHero from '../../sections/PerformanceMarketing/PerformanceMarketingHero'
import PerformanceMarketingIntro from '../../sections/PerformanceMarketing/PerformanceMarketingIntro'
import PerformanceMarketingCTA from '../../sections/PerformanceMarketing/PerformanceMarketingCTA'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'

const PerformanceMarketing = () => {
  return (
    <>
      <SEO
        title="Performance Marketing"
        description="Data-driven performance marketing combining creative, audience insights, and continuous optimization to turn marketing spend into measurable growth."
        path="/services/performance-marketing"
      />
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
