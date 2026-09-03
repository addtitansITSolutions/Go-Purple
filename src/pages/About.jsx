import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../sections/about/AboutHero";
import AboutStory from "../sections/about/AboutStory";
// import WhatDrivesUs from "../sections/about/WhatDrivesUs";

const About = () => {
  return (
    <>
      <Navbar forceScrolled={true}/>

      <main>
        <AboutHero />
        <AboutStory />
        {/* <WhatDrivesUs /> */}
        {/* More About sections will come here */}
      </main>

      <Footer />
    </>
  );
};

export default About;