import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import InfluencerHero from '../../sections/InfluencerMarketing/InfluencerHero'
import InfluencerMarketingIntro from '../../sections/InfluencerMarketing/InfluencerMarketingIntro'
import InfluencerMarketingProcess from '../../sections/InfluencerMarketing/InfluencerMarketingProcess'
import SEO from '../../components/SEO'

const InfluencerMarketing = () => {
  return (
    <>
      <SEO
        title="Influencer Marketing"
        description="Go Purple Nut builds creator-led campaigns that connect brands with the right voices, communities, and audiences to drive meaningful action."
        path="/services/influencer-marketing"
      />
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
