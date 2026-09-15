import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GoPurpleDifference from "../sections/home/GoPurpleDifference";
import Hero from "../sections/home/Hero";
import WhatWeDo from "../sections/home/WhatWeDo";
import ServicesPreview from "../sections/home/ServicesPreview"
import FeaturedWork from "../sections/home/FeaturedWork";
import Testimonials from "../sections/home/Testimonials";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Go Purple Nut | Digital Growth & Marketing"
        description="Go Purple Nut helps brands grow through digital marketing, performance marketing, affiliate marketing, e-commerce, influencer marketing, and creative design."
        path="/"
      />
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <GoPurpleDifference />
        <ServicesPreview />
        {/* <FeaturedWork /> */}
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Home;