import "./leave_form.css";
import BreadCrumb from "../breadcrumb/Breadcrumb";

const LeaveForm = () => {
  return (
    <>
      <BreadCrumb title="Leave Application" path="Dashboard > Apply Leave" />

      <div className="leave_form_section">
        <h2> Application Form </h2>
        <form>
          <div className="fields_container">
            <div className="field_container">
              <label> Leave Type </label>
              <select>
                <option>Casual Leave</option>
                <option>Sick Leave</option>
                <option>Compensatory Off</option>
              </select>
            </div>
            <div className="field_container">
              <label> Available Leave Days </label>
              <input type="text" />
            </div>
            <div className="field_container">
              <label> Start Date </label>
              <input type="date" />
            </div>
            <div className="field_container">
              <label> End date </label>
              <input type="date" />
            </div>
            <div className="field_container">
              <label> Upload Document </label>
              <input type="file" multiple="multiple" />
            </div>
            <div className="field_container">
              <label> Team Email </label>
              <input type="text" />
            </div>
            <div className="field_container">
              <label> Reason </label>
              <textarea />
            </div>
            <button className="submit_btn"> Submit </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LeaveForm;
