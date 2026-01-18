import "./profile.css";
import BreadCrumb from "../breadcrumb/Breadcrumb";
import profile_logo from "../assets/img/profile.jpg";

const Profile = () => {
  return (
    <>
      <BreadCrumb title="Profile" path="Dashboard > User Module" />

      <div className="profile_section">
        <div className="profile_container">
          <img src={profile_logo} className="profile_img" />
          <p style={{ color: "darkslategray", fontWeight: "600" }}>
            Welcome Jon Snow
          </p>
        </div>

        <div className="profile_info_container">
          <div className="fields_container">
            <div className="field_container">
              <label> First Name </label>
              <input type="text" defaultValue="Jon" />
            </div>
            <div className="field_container">
              <label> Last Name </label>
              <input type="text" defaultValue="Snow" />
            </div>
            <div className="field_container">
              <label> Email </label>
              <input type="text" defaultValue="jonsnow@gmail.com" />
            </div>
            <div className="field_container">
              <label> Phone No </label>
              <input type="text" defaultValue="1234567890" />
            </div>
            <div className="field_container">
              <label> Role </label>
              <input type="text" defaultValue="Developer" />
            </div>
            <div className="field_container">
              <label> Available leave days </label>
              <input type="text" defaultValue="15" />
            </div>
            <div className="field_container">
              <label> Address </label>
              <textarea defaultValue="No.25, Adam Street, Central Provision, New York - 101 101" />
            </div>
            <button className="submit_btn"> Edit </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
