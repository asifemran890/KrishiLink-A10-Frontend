import React from "react";

import Footer from "./Footer";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import ModelDetails from "../Pages/All-crops-Details/AllCropsDetails";
import { VscLoading } from "react-icons/vsc";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
