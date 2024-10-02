import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/HomePage/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Add a div wrapper to apply margin-top */}
      <div className="mt-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
