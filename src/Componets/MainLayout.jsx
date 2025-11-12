import React from "react";

import Footer from "./Footer";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import ModelDetails from "../Pages/All-crops-Details/AllCropsDetails";
import { VscLoading } from "react-icons/vsc";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="z-50 ">
        <Navbar></Navbar>
      </div>

      {/* Main  */}
      <div className="z-20 grow ">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
