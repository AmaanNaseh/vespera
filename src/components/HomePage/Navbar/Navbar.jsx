import React, { useState } from "react";

import LOGO from "../../../assets/HomePage/logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 h-[50px]">
      <div>
        <img src={LOGO} alt="logo" className="h-8 sm:h-8 md:h-10" />
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
            } absolute top-[50px] left-0 w-full bg-gray-900 bg-opacity-35 mt-2 flex-col py-6 z-50 md:hidden`}
          >
            <a
              href=""
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white"
            >
              About
            </a>
            <a
              href=""
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white"
            >
              Events
            </a>
            <a
              href=""
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white"
            >
              Speakers
            </a>
            <a
              href=""
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white"
            >
              FAQ
            </a>
            <a
              href=""
              className="hover:bg-gray-700 px-4 py-2 font-medium text-lg text-white"
            >
              Sponsors
            </a>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="md:flex justify-center items-center gap-8 hidden">
          <a href="" className="text-gray-400 text-lg hover:text-white">
            About
          </a>
          <a href="" className="text-gray-400 text-lg hover:text-white">
            Events
          </a>
          <a href="" className="text-gray-400 text-lg hover:text-white">
            Speakers
          </a>
          <a href="" className="text-gray-400 text-lg hover:text-white">
            FAQ
          </a>
          <a href="" className="text-gray-400 text-lg hover:text-white">
            Sponsors
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
