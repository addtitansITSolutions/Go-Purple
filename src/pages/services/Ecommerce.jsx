import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EcommerceMarketingApproach from "../../sections/Ecommerce/EcommerceMarketingApproach";
import EcommerceHero from "../../sections/Ecommerce/EcommerceMarketingHero";
import EcommerceIntro from "../../sections/Ecommerce/EcommerceMarketingIntro";
import EcommerceMarketingWhatYouGet from "../../sections/Ecommerce/EcommerceMarketingWhatYouGet";



const Ecommerce = () => {
  return (
    <>
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