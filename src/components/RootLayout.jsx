import React from "react";
import { Outlet} from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Navbar from "./HomePage/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
        
      </header>
      <main className="mt-[50px]">
        <Outlet />
        <ScrollRestoration />
      </main>
    </div>
  );
};

export default RootLayout;
