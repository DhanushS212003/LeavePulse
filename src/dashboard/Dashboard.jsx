import banner from "../assets/img/dashboard_banner.png";
import "./dashboard.css";
import Table from "../table/Table";

const Dashboard = () => {
  const info = [
    { title: "Total Employees", count: 7, icon: "fa-regular fa-circle-user" },
    { title: "Approved Leave", count: 4, icon: "fa-regular fa-circle-check" },
    { title: "Pending Leave", count: 2, icon: "fa-regular fa-circle-question" },
    { title: "Rejected Leave", count: 5, icon: "fa-regular fa-circle-xmark" },
  ];

  const columns = [
    { column: "Name", sorting: true, type: "string" },
    { column: "Leave Type", sorting: true, type: "string" },
    { column: "Applied Date", sorting: true, type: "date" },
    { column: "Status", sorting: true, type: "string" },
    { column: "Action" },
  ];

  const data = [
    ["Surya", "Sick Leave", "2025-08-26", "Pending", "Edit"],
    ["Dhanush", "Casual Leave", "2025-08-23", "Accepted", "Edit"],
    ["Vijay", "Personal Leave", "2025-08-18", "Pending", "Edit"],
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
      <div className="dashboard_section">
        <div className="banner_container">
          <img src={banner} className="banner_img" alt="Banner" />
          <div>
            <p className="welcome_tag">Welcome Back</p>
            <h2 className="banner_user_name">Mary Fernadoes</h2>
            <p className="banner_line">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic
              non repellendus debitis iure, doloremque assumenda.
            </p>
          </div>
        </div>

        <div className="info_containers">
          {info.map(({ title, count, icon }, index) => (
            <div className="info_container" key={index}>
              <div className="count_container">
                <span className="count">{count}</span>
                <p className="count_title">{title}</p>
              </div>
              <div className="icon_container">
                <i className={icon} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Table
        header="Latest Leaves"
        columns={columns}
        data={data}
        filters={filters}
        filterChild={getfilterChild}
      />
    </>
  );
};

export default Dashboard;
