import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl px-6 mx-auto pt-10 container">
        <HeroSection />
        <FeaturedSection />
        <WorkFlow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
