import { useState } from "react";
import "./table.css";

const Table = ({ columns = [], data = [], filters = [] }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="table_container">
      <div className="table_header_container">
        <h2> Latest Leaves </h2>
        <div className="search_container">
          <input type="search" placeholder="Search" className="search_bar" />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="filter_container">
          <button
            className="filter_btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter by <i className="fa-solid fa-angle-down"></i>
          </button>
          {filters.length > 0 && showFilters && (
            <div className="filter_dropdown_container">
              {filters.map((e, index) => (
                <div key={index}>
                  <input id={e.id} type="checkbox" />
                  <label htmlFor={e.id}>{e.text}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {columns.length > 0 && data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((e, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {e.map((res, i) => (
                  <td key={i}>{res}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
