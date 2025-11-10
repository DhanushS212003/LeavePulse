import "./role.css";
import BreadCrumb from "../breadcrumb/Breadcrumb";
import Table from "../table/Table";

const Role = () => {
  const columns = [
    { column: "Role", sorting: true, type: "string" },
    { column: "Id", sorting: true, type: "string" },
    { column: "Action" },
  ];

  const data = [
    ["CEO", "D0001", "Edit"],
    ["Manager", "D0002", "Edit"],
    ["Developer", "D0003", "Edit"],
  ];

  return (
    <>
      <BreadCrumb title="Role List" path="Dashboard > Role Module" />

      <div className="role_section">
        <h2>New Role</h2>
        <form>
          <div>
            <label> Role Name </label>
            <input type="text" />
          </div>
          <div>
            <label> Role Id </label>
            <input type="text" />
          </div>
          <button className="submit_btn"> Submit </button>
        </form>
      </div>

      <Table columns={columns} data={data} />
    </>
  );
};

export default Role;
