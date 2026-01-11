import React from "react";
import "./notification.css";
import BreadCrumb from "../breadcrumb/Breadcrumb";

const Notifications = () => {
  const notifications = [
    "New Request has been created",
    "Your Request has been approved",
    "Your Request has been rejected",
  ];

  return (
    <>
      <BreadCrumb title="Notifications" path="Dashboard > Notifications" />

      <div className="notification_section">
        <div className="notification_container">
          {notifications.map((message, index) => (
            <div
              key={index}
              className="note_container"
              style={{
                ...(index + 1 !== notifications.length && {
                  borderBottom: "1px solid lightgrey",
                }),
              }}
            >
              <div className="message_container">
                <input type="checkbox" />
                <p>{message}.</p>
              </div>
              <i className="fa-solid fa-xmark close-icon"></i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
