import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../sections/about/AboutHero";
import AboutStory from "../sections/about/AboutStory";
import ClientsCarousel from "../sections/about/ClientsCarousel";
import IndustriesWeServe from "../sections/about/IndustriesWeServe";
import WhatMakesUsDifferent from "../sections/about/WhatMakesUsDifferent";
import SEO from "../components/SEO";
// import WhatDrivesUs from "../sections/about/WhatDrivesUs";

const About = () => {
  return (
    <>
      <SEO
        title="About Go Purple Nut"
        description="Learn how Go Purple Nut brings strategy, creativity, and performance together to build meaningful digital growth for brands."
        path="/about"
      />
      <Navbar forceScrolled={true}/>

      <main>
        <AboutHero />
        <AboutStory />
        <WhatMakesUsDifferent />
        <ClientsCarousel />
        {/* <WhatDrivesUs /> */}
        <IndustriesWeServe />
        {/* More About sections will come here */}
      </main>

      <Footer />
    </>
  );
};

export default About;