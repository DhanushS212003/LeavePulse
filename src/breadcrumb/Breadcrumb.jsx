import "./breadcrumb.css";

const BreadCrumb = ({ title, path }) => {
  return (
    <div className="breadcrumbs_container">
      <h2 style={{ marginBottom: "12px" }}>{title}</h2>
      <p>{path}</p>
    </div>
  );
};

export default BreadCrumb;
