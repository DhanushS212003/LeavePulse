import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
