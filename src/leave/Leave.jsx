import "../role/role.css";
import BreadCrumb from "../breadcrumb/Breadcrumb";

const Leave = () => {
  return (
    <>
      <BreadCrumb title="Leave List" path="Dashboard > Leave Module" />

      <div className="leave_section">
        <h2>New Leave</h2>
        <form>
          <div>
            <label> Leave Name </label>
            <input type="text" />
          </div>
          <div>
            <label> Days </label>
            <input type="text" />
          </div>
          <button className="submit_btn"> Submit </button>
        </form>
      </div>
    </>
  );
};

export default Leave;
