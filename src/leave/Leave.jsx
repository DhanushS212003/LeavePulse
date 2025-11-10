import "../role/role.css";
import BreadCrumb from "../breadcrumb/Breadcrumb";
import Table from "../table/Table";

const Leave = () => {
  const columns = [
    { column: "Leave", type: "string" },
    { column: "Count (per year)", type: "string" },
    { column: "Action" },
  ];

  const data = [
    ["Sick Leave", "12", "Edit"],
    ["Casual Leave", "12", "Edit"],
    ["Personal Leave", "12", "Edit"],
  ];

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

      <Table columns={columns} data={data} />
    </>
  );
};

export default Leave;
