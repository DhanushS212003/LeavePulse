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
        <p> Dashboard </p>
      </div>

      <div className="sidebar_row_container" onClick={() => navigate("/roles")}>
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-address-card"></i>
        </div>
        <p> Roles </p>
      </div>

      <div
        className="sidebar_row_container"
        onClick={() => navigate("/leaves")}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-rectangle-list"></i>
        </div>
        <p> Leave Types </p>
      </div>

      <div
        className="sidebar_row_container"
        onClick={toggleEmployeeHiddenLinksContainer}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-users-rectangle"></i>
        </div>
        <div className="link_container">
          <p> Employees </p>
          <i
            className={`fa-solid fa-chevron-${
              isEmployeeExpanded ? "up" : "down"
            }`}
          />
        </div>
      </div>

      {isEmployeeExpanded && (
        <>
          <div
            className="hidden_list_container"
            onClick={() => navigate("/new_employee")}
          >
            <i className="fa-regular fa-circle-dot"></i>
            <p> New Employee </p>
          </div>

          <div
            className="hidden_list_container"
            onClick={() => navigate("/employees")}
          >
            <i className="fa-regular fa-circle-dot"></i>
            <p> Manage Employee </p>
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
          <p> Leaves </p>
          <i
            className={`fa-solid fa-chevron-${isLeaveExpanded ? "up" : "down"}`}
          ></i>
        </div>
      </div>

      {isLeaveExpanded && (
        <>
          <div
            className="hidden_list_container"
            onClick={() => navigate("/apply_leave")}
          >
            <i className="fa-regular fa-circle-dot"></i>
            <p> Apply Leave </p>
          </div>

          <div
            className="hidden_list_container"
            onClick={() => navigate("/my_leaves")}
          >
            <i className="fa-regular fa-circle-dot"></i>
            <p> My Leave </p>
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
        <p> Calendar </p>
      </div>

      <div
        className="sidebar_row_container"
        onClick={() => navigate("/notifications")}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-bell"></i>
        </div>
        <p> Notifications </p>
      </div>

      <div className="sidebar_row_container">
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-book"></i>
        </div>
        <p> Visit Us </p>
      </div>
    </div>
  );
};

export default SideBar;
