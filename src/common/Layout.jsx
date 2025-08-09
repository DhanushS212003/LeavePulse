import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import "../index.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="body_section">
        <SideBar />
        <div className="main_section">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
