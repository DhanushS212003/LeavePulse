import BreadCrumb from "../breadcrumb/Breadcrumb";
import Table from "../table/Table";

const Employees = () => {
  const columns = [
    { column: "Name", sorting: true, type: "string" },
    { column: "Email", sorting: true, type: "string" },
    { column: "Role", sorting: true, type: "string" },
    { column: "Joined Date", sorting: true, type: "date" },
    { column: "Action" },
  ];

  const data = [
    ["Arya Stark", "aryastark@gmail.com", "Manager", "2025-01-10", "Edit"],
    ["Jon Snow", "jonsnow@gmail.com", "Developer", "2024-11-05", "Edit"],
    ["Jamie Lannister", "jamielannister@gmail.com", "Designer", "2025-08-01", "Edit"],
  ];

  const filters = [
    { id: "all", text: "All" },
    { id: "manager", text: "Manager" },
    { id: "developer", text: "Developer" },
    { id: "designer", text: "Designer" },
  ];

  const getfilterChild = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
        }}
      >
        <div>
          <label className="filter_text">Role</label>
          <select className="w-100" style={{ width: "100%", marginTop: "4px" }}>
            {filters.map((e) => (
              <option key={e.id}>{e.text}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="filter_text"> From </label>
          <input type="date" style={{ display: "block", marginTop: "4px" }} />
        </div>
        <div>
          <label className="filter_text"> To </label>
          <input type="date" style={{ display: "block", marginTop: "4px" }} />
        </div>
      </div>
    );
  };

  return (
    <>
      <BreadCrumb title="Employee List" path="Dashboard > Manage Employee" />

      <Table
        header="All Employees"
        columns={columns}
        data={data}
        filters={filters}
        filterChild={getfilterChild}
      />
    </>
  );
};

export default Employees;
