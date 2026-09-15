import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import DigitalMarketingHero from "../../sections/DigitalMarketing/DigitalMarketingHero";
import DigitalMarketingIntro from "../../sections/DigitalMarketing/DigitalMarketingIntro";
import DigitalMarketingWhy from "../../sections/DigitalMarketing/DigitalMarketingWhy";


const DigitalMarketing = () => {
  return (
    <>
      <SEO
        title="Digital Marketing"
        description="Go Purple Nut creates digital marketing strategies that connect brands with the right people and turn attention into meaningful growth."
        path="/services/digital-marketing"
      />
      <Navbar forceScrolled={true}/>
      <DigitalMarketingHero />
      <DigitalMarketingIntro />
      <DigitalMarketingWhy />
      <Footer />

      {/* Next sections */}
    </>
  );
};

export default DigitalMarketing;