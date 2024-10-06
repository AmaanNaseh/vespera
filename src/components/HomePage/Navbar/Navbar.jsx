import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAboutClick = (nameSection) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(nameSection, {
          smooth: true,
          duration: 500,
        });
      }, 100);
    } else {
      scroller.scrollTo(nameSection, {
        smooth: true,
        duration: 500,
      });
    }
  };

  return (
    <div
      className={`font-spaceGrotesk top-0 left-0 z-50 fixed flex w-full md:justify-evenly items-center ${
        isScrolled ? "bg-[#272727] shadow-lg" : "bg-[#272727] md:bg-black"
      } px-4 sm:px-6 md:px-8 h-[50px] transition-all duration-300`}
    >
      <div>
        {!menuOpen ? (
          <RxHamburgerMenu
            className="md:hidden text-3xl text-white"
            onClick={() => setMenuOpen(true)}
          />
        ) : (
          <RxCross1
            className="md:hidden text-3xl text-white"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile menu */}
        <div
          className={`absolute top-[50px] left-0 w-1/2 h-[100vh] bg-gray-900 bg-opacity-90 flex-col py-6 z-50 md:hidden transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Link
            to="/"
            className="block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <p
            className="block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => { handleAboutClick("aboutSection"); setMenuOpen(false); }}
          >
            About
          </p>
          <Link
            to="/events"
            className="block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/speakers"
            className="block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Speakers
          </Link>
          <p
            className="block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => { handleAboutClick("faqSection"); setMenuOpen(false); }}
          >
            FAQ
          </p>
          <Link
            to="/sponsers"
            className="block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Sponsors
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="md:flex justify-center items-center gap-16 hidden w-full">
        <Link to="/" className="text-gray-400 text-lg hover:text-white">
          Home
        </Link>
        <p onClick={() => handleAboutClick('aboutSection')} className="text-gray-400 text-lg hover:text-white hover:cursor-pointer">
          About
        </p>
        <Link to="/events" className="text-gray-400 text-lg hover:text-white">
          Events
        </Link>
        <Link to="/speakers" className="text-gray-400 text-lg hover:text-white">
          Speakers
        </Link>
        <p onClick={() => handleAboutClick('faqSection')} className="text-gray-400 text-lg hover:text-white hover:cursor-pointer">
          FAQ
        </p>
        <Link to="/sponsers" className="text-gray-400 text-lg hover:text-white">
          Sponsors
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
