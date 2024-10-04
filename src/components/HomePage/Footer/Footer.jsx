import React from "react";

import FOOTER from "../../../assets/HomePage/HeroSection/footer.png"

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center footer">
      <img src={FOOTER} alt="footer" className=""/>
      <div className="bottom-0 absolute flex flex-col items-center justify-center">
        <p className="text-xs sm:text-xl">
          Made with <span>🤍</span> by the Vespera Team
        </p>
        <p className="text-xs sm:text-xl">Copyright ©️ 2024 Vespera | IoSC x AWSCC</p>
      </div>
    </footer>
  );
};

export default Footer;
