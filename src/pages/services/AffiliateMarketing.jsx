import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import AffiliateMarketingHero from "../../sections/AffiliateMarketing/AffiliateMarketingHero";
import AffiliateMarketingIntro from "../../sections/AffiliateMarketing/AffiliateMarketingIntro";
import AffiliateMarketingWhy from "../../sections/AffiliateMarketing/AffiliateMarketingWhy";



const AffiliateMarketing = () => {
  return (
    <>
      <SEO
        title="Affiliate Marketing"
        description="Go Purple Nut connects brands with publishers, creators, and communities to turn trusted recommendations into measurable revenue."
        path="/services/affiliate-marketing"
      />
      <Navbar forceScrolled={true}/>
      <AffiliateMarketingHero />
      <AffiliateMarketingIntro />
      <AffiliateMarketingWhy />
      <Footer />

      {/* Next sections */}
    </>
  );
};

export default AffiliateMarketing;