import React from "react";
import FOOTER from "../../../assets/HomePage/HeroSection/footer-background.png";

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center footer bg-black overflow-hidden sm:h-[50vh] h-[200px]">
      {/* Rotating Image */}
      <img
        src={FOOTER}
        alt="footer"
        className="absolute 2xl:bottom-[-240%] bottom-[-110%] w-[100%] xl:bottom-[-220%] lg:bottom-[-170%] md:bottom-[-130%] md:w-[90%] sm:w-[50%] lg:w-[80%] h-auto animate-rotateImage"
      />
      {/* Footer Text */}
      <div className="absolute bottom-[0] flex flex-col items-center justify-center">
        <p className="text-[11px] sm:text-xl text-white">
          Made with <span>🤍</span> by the Vespera Team
        </p>
        <p className="text-[11px] sm:text-xl text-white">
          Copyright ©️ 2024 Vespera | IoSC x AWSCC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
