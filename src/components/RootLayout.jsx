import React from "react";
import { Outlet, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"; // Adjust the import path as needed
import { ScrollRestoration } from "react-router-dom";
import Navbar from "./HomePage/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <header>
        <Navbar />
      </header>
      <main className="mt-[50px]">
        <Outlet /> {/* This is where the child routes will be rendered */}
        <ScrollRestoration /> {/* Restore scroll position on navigation */}
      </main>
    </div>
  );
};

export default RootLayout;
