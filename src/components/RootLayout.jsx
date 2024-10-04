import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/HomePage/Navbar/Navbar";
import ScrollToTop from './ScrollToTop';

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      {/* Add a div wrapper to apply margin-top */}
      <div className="mt-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
