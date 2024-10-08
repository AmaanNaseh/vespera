import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import './Navbar.css';

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
            className="font-fogLighten block hover:bg-gray-700 flip px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
            <p
              className="inner-heading font-fogLighten block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
              onClick={() => { handleAboutClick("aboutSection"); setMenuOpen(false); }}
            >
              About
            </p>
          <Link
            to="/events"
            className="font-fogLighten block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/speakers"
            className="font-fogLighten block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Speakers
          </Link>
          <p
            className="font-fogLighten block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => { handleAboutClick("faqSection"); setMenuOpen(false); }}
          >
            FAQ
          </p>
          <Link
            to="/sponsers"
            className="font-fogLighten block hover:bg-gray-700 px-4 py-2 font-medium text-lg text-start text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Sponsors
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="font-fogLighten md:flex justify-center items-center gap-12 hidden w-full">
        {/* <Link to="/" className="text-gray-400 text-lg hover:text-white">
          Home
        </Link> */}
        <div className="inner-headings h-[40px] overflow-hidden transition-none px-4">
            <span>
              <Link to="/"
                className="font-fogLighten text-gray-400 block py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link to="/"
                className="font-fogLighten block text-gray-400  py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </span>
          </div>
        <div className="inner-headings h-[40px] overflow-hidden transition-none">
            <span>
              <Link
                className="font-fogLighten text-gray-400 block hover:pointer py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
                onClick={() => { handleAboutClick("aboutSection")}}
              >
                About
              </Link>
              <Link
                className="font-fogLighten block text-gray-400 py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
                onClick={() => { handleAboutClick("aboutSection")}}
              >
                About
              </Link>
            </span>
          </div>
        <div className="inner-headings h-[40px] overflow-hidden transition-none px-4">
            <span>
              <Link to="/events"
                className="font-fogLighten text-gray-400 block py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
              >
                Events
              </Link>
              <Link to="/events"
                className="font-fogLighten block text-gray-400  py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
              >
                Events
              </Link>
            </span>
          </div>
        <div className="inner-headings h-[40px] overflow-hidden transition-none px-4">
            <span>
              <Link to="/speakers"
                className="font-fogLighten text-gray-400 block py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
              >
                Speakers
              </Link>
              <Link to="/speakers"
                className="font-fogLighten block text-gray-400  py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
              >
                Speakers
              </Link>
            </span>
          </div>
        {/* <p onClick={() => handleAboutClick('faqSection')} className="font-fogLighten text-gray-400 text-lg hover:text-white hover:cursor-pointer">
          FAQ
        </p> */}
        <div className="inner-headings h-[40px] overflow-hidden transition-none px-4">
            <span>
              <Link
                className="font-fogLighten text-gray-400 block py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
                onClick={() => { handleAboutClick("faqSection")}}
              >
                FAQ
              </Link>
              <Link
                className="font-fogLighten block text-gray-400  py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
                onClick={() => handleAboutClick('faqSection')} 
              >
                FAQ
              </Link>
            </span>
          </div>
        <div className="inner-headings h-[40px] overflow-hidden transition-none px-4">
            <span>
              <Link  to="/sponsers"
                className="font-fogLighten text-gray-400 block py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
              >
                Sponsors
              </Link>
              <Link  to="/sponsers"
                className="font-fogLighten block text-gray-400  py-2 font-medium text-lg text-start hover:text-white transition-colors duration-200"
              >
                Sponsors
              </Link>
            </span>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
