import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import AboutIntro from "../sections/home/AboutIntro";
import Hero from "../sections/home/Hero";
import WhatWeDo from "../sections/home/WhatWeDo";
// import Services from "../sections/home/Services";
// import WhyChooseUs from "../sections/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        {/* <Services /> */}
        {/* <WhyChooseUs /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;