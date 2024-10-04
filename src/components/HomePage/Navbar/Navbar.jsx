import React, { useState, useEffect } from "react";
import LOGO from "../../../assets/HomePage/logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink,scroller } from "react-scroll";

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
      console.log(location.pathname);
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
      className={`top-0 left-0 z-50 fixed flex justify-between items-center ${
        isScrolled
          ? "bg-gray-800 shadow-lg" // Darker background with shadow on scroll
          : "bg-black" // Black background color at top
      } px-4 sm:px-6 md:px-8 w-full h-[50px] transition-all duration-300`}
    >
      <div>
        <Link to="/">
          <img src={LOGO} alt="logo" className="h-8 sm:h-8 md:h-10" />
        </Link>
      </div>

      <div>
        <div>
          {!menuOpen ? (
            <RxHamburgerMenu
              className="md:hidden text-3xl text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <RxCross1
              className="md:hidden text-3xl text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}

          {/* Mobile menu */}
          <div
            className={`${
              !menuOpen ? "hidden" : "flex"
            } absolute top-[50px] left-0 w-full bg-gray-900 bg-opacity-90 flex-col py-6 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white transition-colors duration-200"
              onClick={()=>{handleAboutClick("aboutSection"); setMenuOpen(!menuOpen)}}
            >
              About
            </p>
            <Link
              to="/events"
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white transition-colors duration-200"
              onClick={()=>setMenuOpen(!menuOpen)}
            >
              Events
            </Link>
            <Link
              to="/speakers"
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white transition-colors duration-200"
              onClick={()=>setMenuOpen(!menuOpen)}
            >
              Speakers
            </Link>
            <p
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white transition-colors duration-200"
              onClick={()=>{handleAboutClick("faqSection"); setMenuOpen(!menuOpen)}}
            >
              FAQ
            </p>
            <Link
              to="/sponsers"
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white transition-colors duration-200"
              onClick={()=>setMenuOpen(!menuOpen)}
            >
              Sponsors
            </Link>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="md:flex justify-center items-center gap-8 hidden">
          <p onClick={()=>handleAboutClick('aboutSection')} className="text-gray-400 text-lg hover:text-white hover:cursor-pointer">
            About
          </p>
          <Link to="/events" className="text-gray-400 text-lg hover:text-white">
            Events
          </Link>
          <Link to="/speakers" className="text-gray-400 text-lg hover:text-white">
            Speakers
          </Link>
          <p onClick={()=>handleAboutClick('faqSection')} className="text-gray-400 text-lg hover:text-white hover:cursor-pointer">
            FAQ
          </p>
          <Link to="/sponsers" className="text-gray-400 text-lg hover:text-white">
            Sponsors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
