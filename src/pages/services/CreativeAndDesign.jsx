import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import CreativeDesignHero from "../../sections/CreativeAndDesign/CreativeDesignHero";
import CreativeDesignIntro from "../../sections/CreativeAndDesign/CreativeDesignIntro";
import CreativeDesignWhatWeCreate from "../../sections/CreativeAndDesign/CreativeDesignWhatWeCreate";



const CreativeAndDesign = () => {
  return (
    <>
      <SEO
        title="Creative & Design"
        description="Creative and design services that make brands easier to understand, remember, and connect with through meaningful digital experiences."
        path="/services/creative-design"
      />
      <Navbar forceScrolled={true}/>
      <main>
        <CreativeDesignHero />
        <CreativeDesignIntro />
        <CreativeDesignWhatWeCreate />
      </main>
      <Footer />

      {/* Next sections */}
    </>
  );
};

export default CreativeAndDesign;