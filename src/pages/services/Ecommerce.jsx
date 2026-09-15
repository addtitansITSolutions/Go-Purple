import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import EcommerceMarketingApproach from "../../sections/Ecommerce/EcommerceMarketingApproach";
import EcommerceHero from "../../sections/Ecommerce/EcommerceMarketingHero";
import EcommerceIntro from "../../sections/Ecommerce/EcommerceMarketingIntro";
import EcommerceMarketingWhatYouGet from "../../sections/Ecommerce/EcommerceMarketingWhatYouGet";



const Ecommerce = () => {
  return (
    <>
        <SEO
          title="E-Commerce Marketing"
          description="Build better shopping journeys with e-commerce marketing strategies designed to improve discovery, trust, conversion, and customer value."
          path="/services/e-commerce"
        />
      <Navbar forceScrolled={true}/>
      <EcommerceHero />
      <EcommerceIntro />
      <EcommerceMarketingApproach />
      <EcommerceMarketingWhatYouGet />
      <Footer />

      {/* Next sections */}
    </>
  );
};

export default Ecommerce;