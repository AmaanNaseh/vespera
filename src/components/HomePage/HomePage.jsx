import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import About from "./About/About";
import Events from "./Events/Events";
import Sponsers from "./Sponsers/Sponsers";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";

import { Element } from "react-scroll";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 bg-black h-full font-spaceGrotesk text-white">
      <div className=""></div>

      <HeroSection />
      <Element name="aboutSection">
        <About />
      </Element>
      <Events />
      <Sponsers />
      <Element name="faqSection">
        <Faq />
      </Element>
      <Footer />
    </div>
  );
};

export default HomePage;
