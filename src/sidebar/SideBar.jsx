import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const [isEmployeeExpanded, setIsEmployeeExpanded] = useState(false);
  const [isLeaveExpanded, setIsLeaveExpanded] = useState(false);

  const toggleEmployeeHiddenLinksContainer = () => {
    setIsEmployeeExpanded(!isEmployeeExpanded);
  };

  const toggleLeaveHiddenLinksContainer = () => {
    setIsLeaveExpanded(!isLeaveExpanded);
  };

  return (
    <div className="sidebar_section">
      <div className="sidebar_row_container" onClick={() => navigate("/")}>
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-house"></i>
        </div>
        <div>
          <p className="sidebar_link"> Dashboard </p>
        </div>
      </div>

      <div
        className="sidebar_row_container"
        onClick={() => navigate("/role?page=role")}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-address-card"></i>
        </div>
        <div>
          <p className="sidebar_link"> Role </p>
        </div>
      </div>

      <div
        className="sidebar_row_container"
        onClick={() => navigate("/role?page=leavetype")}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-rectangle-list"></i>
        </div>
        <div>
          <p className="sidebar_link"> Leave Type </p>
        </div>
      </div>

      <div
        className="sidebar_row_container"
        onClick={toggleEmployeeHiddenLinksContainer}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-users-rectangle"></i>
        </div>
        <div className="link_container">
          <p className="sidebar_link"> Employees </p>
          <div className="chevron_container">
            <i
              className={`fa-solid fa-chevron-${
                isEmployeeExpanded ? "up" : "down"
              }`}
            ></i>
          </div>
        </div>
      </div>

      {isEmployeeExpanded && (
        <>
          <div
            className="hidden_list_container"
            onClick={() => navigate("/createemployee")}
          >
            <div className="sidebar_hidden_icon_container">
              <i className="fa-regular fa-circle-dot"></i>
            </div>
            <div className="link_container">
              <p className="hidden_link"> New Employee </p>
            </div>
          </div>

          <div
            className="hidden_list_container"
            onClick={() => navigate("/manageemployee")}
          >
            <div className="sidebar_hidden_icon_container">
              <i className="fa-regular fa-circle-dot"></i>
            </div>
            <div className="link_container">
              <p className="hidden_link"> Manage Employee </p>
            </div>
          </div>
        </>
      )}

      <div
        className="sidebar_row_container"
        onClick={toggleLeaveHiddenLinksContainer}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-calendar-check"></i>
        </div>
        <div className="link_container">
          <p className="sidebar_link"> Leave </p>
          <div className="chevron_container">
            <i
              className={`fa-solid fa-chevron-${
                isLeaveExpanded ? "up" : "down"
              }`}
            ></i>
          </div>
        </div>
      </div>

      {isLeaveExpanded && (
        <>
          <div
            className="hidden_list_container"
            onClick={() => navigate("/applyleave")}
          >
            <div className="sidebar_hidden_icon_container">
              <i className="fa-regular fa-circle-dot"></i>
            </div>
            <div className="link_container">
              <p className="hidden_link"> Apply Leave </p>
            </div>
          </div>

          <div
            className="hidden_list_container"
            onClick={() => navigate("/allleave")}
          >
            <div className="sidebar_hidden_icon_container">
              <i className="fa-regular fa-circle-dot"></i>
            </div>
            <div className="link_container">
              <p className="hidden_link"> All Leave </p>
            </div>
          </div>
        </>
      )}

      <div
        className="sidebar_row_container"
        onClick={() => navigate("/calendar")}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-calendar-days"></i>
        </div>
        <div>
          <p className="sidebar_link"> Calendar </p>
        </div>
      </div>

      <div
        className="sidebar_row_container"
        onClick={() => navigate("/notification")}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div>
          <p className="sidebar_link"> Notification </p>
        </div>
      </div>

      <div className="sidebar_row_container" onClick={() => navigate("/role")}>
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-book"></i>
        </div>
        <div>
          <p className="sidebar_link"> Visit Us </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
