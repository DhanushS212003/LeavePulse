import { useNavigate } from "react-router-dom";
import "./page_not_found.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page_not_found_section">
      <div>
        <h1> 404 </h1>
        <h3> Error: 404 Page Not Found </h3>
        <p>
          Sorry, the page you're looking for cannot be accessed. <br /> Check
          the URL.
        </p>
        <button
          onClick={() => navigate("/")}
          className="submit_btn"
          style={{
            minWidth: "200px",
            padding: "10px 20px",
            marginTop: "20px",
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
