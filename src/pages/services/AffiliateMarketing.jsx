import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AffiliateMarketingHero from "../../sections/AffiliateMarketing/AffiliateMarketingHero";
import AffiliateMarketingIntro from "../../sections/AffiliateMarketing/AffiliateMarketingIntro";
import AffiliateMarketingWhy from "../../sections/AffiliateMarketing/AffiliateMarketingWhy";



const AffiliateMarketing = () => {
  return (
    <>
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