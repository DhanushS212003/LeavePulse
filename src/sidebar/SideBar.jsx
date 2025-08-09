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
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div className="sidebar_row_container" onClick={() => navigate("/")}>
          <div className="sidebar_icon_container">
            <i className="fa-solid fa-house"></i>
          </div>
          <p> Dashboard {i} </p>
        </div>
      ))}

      <div
        className="sidebar_row_container"
        onClick={() => navigate("/role?page=role")}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-address-card"></i>
        </div>
        <p> Role </p>
      </div>

      <div
        className="sidebar_row_container"
        onClick={() => navigate("/role?page=leavetype")}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-rectangle-list"></i>
        </div>
        <p> Leave Type </p>
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
            onClick={() => navigate("/createemployee")}
          >
            <i className="fa-regular fa-circle-dot"></i>
            <p> New Employee </p>
          </div>

          <div
            className="hidden_list_container"
            onClick={() => navigate("/manageemployee")}
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
          <p> Leave </p>
          <i
            className={`fa-solid fa-chevron-${isLeaveExpanded ? "up" : "down"}`}
          ></i>
        </div>
      </div>

      {isLeaveExpanded && (
        <>
          <div
            className="hidden_list_container"
            onClick={() => navigate("/applyleave")}
          >
            <i className="fa-regular fa-circle-dot"></i>
            <p> Apply Leave </p>
          </div>

          <div
            className="hidden_list_container"
            onClick={() => navigate("/allleave")}
          >
            <i className="fa-regular fa-circle-dot"></i>
            <p> All Leave </p>
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
        onClick={() => navigate("/notification")}
      >
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-bell"></i>
        </div>
        <p> Notification </p>
      </div>

      <div className="sidebar_row_container" onClick={() => navigate("/role")}>
        <div className="sidebar_icon_container">
          <i className="fa-solid fa-book"></i>
        </div>
        <p> Visit Us </p>
      </div>
    </div>
  );
};

export default SideBar;
