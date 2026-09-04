import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DigitalMarketingHero from "../../sections/DigitalMarketing/DigitalMarketingHero";
import DigitalMarketingIntro from "../../sections/DigitalMarketing/DigitalMarketingIntro";
import DigitalMarketingWhy from "../../sections/DigitalMarketing/DigitalMarketingWhy";


const DigitalMarketing = () => {
  return (
    <>
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