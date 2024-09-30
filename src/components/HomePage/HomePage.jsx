import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import About from "./About/About";
import Events from "./Events/Events";
import Sponsers from "./Sponsers/Sponsers";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 bg-black h-full font-spaceGrotesk text-white hero">
      <div className="overlay"></div>

      <Navbar />
      <HeroSection />
      <About />
      <Events />
      <Sponsers />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
