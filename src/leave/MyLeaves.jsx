import BreadCrumb from "../breadcrumb/Breadcrumb";
import Table from "../table/Table";

const MyLeaves = () => {
  const columns = [
    { column: "Leave Type", sorting: true, type: "string" },
    { column: "Applied Date", sorting: true, type: "date" },
    { column: "Status", sorting: true, type: "string" },
    { column: "Action" },
  ];

  const data = [
    ["Sick Leave", "2025-08-26", "Pending", "Edit"],
    ["Casual Leave", "2025-08-23", "Accepted"],
    ["Personal Leave", "2025-08-18", "Pending", "Edit"],
  ];

  const filters = [
    { id: "approved", text: "Approved Leave" },
    { id: "pending", text: "Pending Leave" },
    { id: "rejected", text: "Rejected Leave" },
  ];

  const getfilterChild = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", rowGap: "8px" }}>
        {filters.map((e, index) => (
          <div key={index} style={{ display: "flex", gap: "12px" }}>
            <input id={e.id} type="checkbox" />
            <label htmlFor={e.id}>{e.text}</label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <BreadCrumb title="My Leave List" path="Dashboard > Applied Leaves" />

      <Table
        header="My Leaves"
        columns={columns}
        data={data}
        filters={filters}
        filterChild={getfilterChild}
      />
    </>
  );
};

export default MyLeaves;
