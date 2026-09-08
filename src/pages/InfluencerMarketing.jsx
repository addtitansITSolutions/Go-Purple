import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InfluencerHero from '../sections/InfluencerMarketing/InfluencerHero'
import InfluencerMarketingIntro from '../sections/InfluencerMarketing/InfluencerMarketingIntro'
import InfluencerMarketingProcess from '../sections/InfluencerMarketing/InfluencerMarketingProcess'

const InfluencerMarketing = () => {
  return (
    <>
      <Navbar forceScrolled/>
      <main>
        <InfluencerHero />
        <InfluencerMarketingIntro />
        <InfluencerMarketingProcess />
      </main>
      <Footer />
    </>
  )
}

export default InfluencerMarketing
