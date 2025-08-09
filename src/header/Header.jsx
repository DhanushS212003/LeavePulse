import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import profile_logo from "../assets/img/profile.jpg";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfileContainer = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
    setIsProfileOpen(false);
  };

  // Handle Escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isProfileOpen) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isProfileOpen]);

  return (
    <div className="header_section">
      <div className="header">
        <h2 className="logo" onClick={handleLogoClick}>
          LeavePulse
        </h2>

        <div className="profile_container" onClick={toggleProfileContainer}>
          <img src={profile_logo} className="profile_photo" alt="Profile" />
          <p className="user_name">Mary Fernadoes</p>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>

      {isProfileOpen && (
        <div className="dropdown_container">
          <div className="dropdown_list_container" onClick={handleProfileClick}>
            <div className="icon_container">
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <p className="dropdown_list">Profile</p>
            </div>
          </div>

          <div className="dropdown_list_container">
            <div className="icon_container">
              <i className="fa-solid fa-key"></i>
            </div>
            <div>
              <p className="dropdown_list">Reset Password</p>
            </div>
          </div>

          <div className="dropdown_list_container">
            <div className="icon_container">
              <i className="fa-solid fa-right-from-bracket"></i>
            </div>
            <div>
              <p className="dropdown_list">Log Out</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
