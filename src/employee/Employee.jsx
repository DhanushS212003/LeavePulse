import "./employee.css";
import BreadCrumb from "../breadcrumb/Breadcrumb";

const Employee = () => {
  return (
    <>
      <BreadCrumb title="Employee" path="Dashboard > New Employee" />

      <div className="employee_form_section">
        <h2> Application Form </h2>
        <form>
          <div className="fields_container">
            <div className="field_container">
              <label> First Name </label>
              <input type="text" />
            </div>
            <div className="field_container">
              <label> Last Name </label>
              <input type="text" />
            </div>
            <div className="field_container">
              <label> Email </label>
              <input type="text" />
            </div>
            <div className="field_container">
              <label> Phone Number </label>
              <input type="tel" />
            </div>
            <div className="field_container">
              <label> Password </label>
              <input type="text" />
            </div>
            <div className="field_container">
              <label> Role </label>
              <select>
                <option>Manager</option>
                <option>Developer</option>
                <option>Designer</option>
              </select>
            </div>
          </div>
          <div className="footer_container">
            <div className="field_container">
              <label> Address </label>
              <textarea />
            </div>
            <button className="submit_btn"> Submit </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Employee;
