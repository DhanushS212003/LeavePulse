import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import Footer from "../footer/Footer";
import "../index.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="body_section">
        <SideBar />
        <div className="main_section">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
