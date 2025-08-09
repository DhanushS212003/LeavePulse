import banner from "../assets/img/dashboard_banner.png";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="poster_container">
        <div className="poster_image_container">
          <img src={banner} className="banner_img" alt="Banner" />
        </div>
        <div className="poster_content_container">
          <p className="welcome_tag">Welcome Back</p>
          <h2 className="poster_user_name">Mary Fernadoes</h2>
          <p className="poster_line">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic
            non repellendus debitis iure, doloremque assumenda.
          </p>
        </div>
      </div>

      {/* <div className="info_container">
        <div className="individual_info_container">
          <div className="count_container">
            <span className="count">7</span>
            <p className="count_title">Total Employees</p>
          </div>
          <div className="image_container">
            <i className="fa-regular fa-file-waveform"></i>
          </div>
        </div>

        <div className="individual_info_container">
          <div className="count_container">
            <span className="count">4</span>
            <p className="count_title">Approved Leave</p>
          </div>
          <div className="image_container">
            <i className="fa-regular fa-circle-check"></i>
          </div>
        </div>

        <div className="individual_info_container">
          <div className="count_container">
            <span className="count">2</span>
            <p className="count_title">Pending Leave</p>
          </div>
          <div className="image_container">
            <i className="fa-regular fa-circle-question"></i>
          </div>
        </div>

        <div className="individual_info_container">
          <div className="count_container">
            <span className="count">5</span>
            <p className="count_title">Rejected Leave</p>
          </div>
          <div className="image_container">
            <i className="fa-regular fa-circle-xmark"></i>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
