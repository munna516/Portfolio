import React from "react";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen  ">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex-grow ">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
