import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreativeDesignHero from "../sections/CreativeAndDesign/CreativeDesignHero";
import CreativeDesignIntro from "../sections/CreativeAndDesign/CreativeDesignIntro";
import CreativeDesignWhatWeCreate from "../sections/CreativeAndDesign/CreativeDesignWhatWeCreate";



const CreativeAndDesign = () => {
  return (
    <>
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