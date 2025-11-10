import { useMemo, useState } from "react";
import "./table.css";

const Table = ({
  columns = [],
  data = [],
  filters = [],
  sortableColumns = [],
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: "asc",
  });

  const sortableConfigByName = useMemo(() => {
    const configMap = new Map();

    sortableColumns.forEach(({ column, type }) => {
      configMap.set(column, type);
    });

    return configMap;
  }, [sortableColumns]);

  const sortedData = useMemo(() => {
    const { column, direction } = sortConfig;

    if (!column || !sortableConfigByName.has(column)) return data;

    const columnIndex = columns.findIndex((col) => col === column);

    const sortType = sortableConfigByName.get(column);
    const directionMultiplier = direction === "asc" ? 1 : -1;

    const compareValues = (aValue, bValue) => {
      if (sortType === "date") {
        const aTime = aValue ? new Date(aValue).getTime() : 0;
        const bTime = bValue ? new Date(bValue).getTime() : 0;
        return (aTime - bTime) * directionMultiplier;
      }

      const aString = aValue ?? "";
      const bString = bValue ?? "";
      return (
        String(aString).localeCompare(String(bString), undefined, {
          sensitivity: "base",
          numeric: sortType === "number",
        }) * directionMultiplier
      );
    };

    return [...data].sort((rowA, rowB) =>
      compareValues(rowA?.[columnIndex], rowB?.[columnIndex])
    );
  }, [columns, data, sortConfig, sortableConfigByName]);

  const handleSort = (columnName) => {
    setSortConfig((prev) => {
      if (prev.column === columnName) {
        return {
          column: columnName,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }

      return {
        column: columnName,
        direction: "asc",
      };
    });
  };

  return (
    <div className="table_container">
      <div className="table_header_container">
        <h2> Latest Leaves </h2>
        <div className="search_container">
          <input type="search" placeholder="Search" className="search_bar" />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        {filters.length > 0 && (
          <div className="filter_container">
            <button
              className="filter_btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filter by <i className="fa-solid fa-angle-down"></i>
            </button>
            {showFilters && (
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
        )}
      </div>

      {columns.length > 0 && data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              {columns.map((column, index) => (
                <th key={index}>
                  {sortableConfigByName.has(column) ? (
                    <button
                      type="button"
                      className="table_header_btn"
                      onClick={() => handleSort(column)}
                    >
                      {column}
                      <i
                        className={`sort fa-solid ${
                          sortConfig.column === column
                            ? sortConfig.direction === "asc"
                              ? "fa-sort-up"
                              : "fa-sort-down"
                            : "fa-sort"
                        }`}
                      />
                    </button>
                  ) : (
                    column
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((e, index) => (
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
