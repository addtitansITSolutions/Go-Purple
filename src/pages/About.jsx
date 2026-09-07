import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../sections/about/AboutHero";
import AboutStory from "../sections/about/AboutStory";
import ClientsCarousel from "../sections/about/ClientsCarousel";
import IndustriesWeServe from "../sections/about/IndustriesWeServe";
import WhatMakesUsDifferent from "../sections/about/WhatMakesUsDifferent";
// import WhatDrivesUs from "../sections/about/WhatDrivesUs";

const About = () => {
  return (
    <>
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