import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GoPurpleDifference from "../sections/home/GoPurpleDifference";
import Hero from "../sections/home/Hero";
import WhatWeDo from "../sections/home/WhatWeDo";
import ServicesPreview from "../sections/home/ServicesPreview"
import SelectedWork from "../sections/home/SelectedWork";
import Testimonials from "../sections/home/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <GoPurpleDifference />
        <ServicesPreview />
        <SelectedWork />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Home;