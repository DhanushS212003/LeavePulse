import { useMemo, useState } from "react";
import "./table.css";

const Table = ({
  header,
  columns = [],
  data = [],
  filters = [],
  filterChild,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: "asc",
  });

  const sortedData = useMemo(() => {
    const { column, direction } = sortConfig;

    if (!column) return data;

    const columnConfig = columns.find((col) => col.column === column);
    if (!columnConfig || !columnConfig.sorting) return data;

    const columnIndex = columns.findIndex((col) => col.column === column);
    const sortType = columnConfig.type || "string";
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
  }, [columns, data, sortConfig]);

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
    <div className="table_section">
      <div className="table_header_container">
        <h2> {header} </h2>
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
              <i
                className="fa-solid fa-filter"
                style={{ color: "darkslategray" }}
              />
            </button>
            {showFilters && (
              <div className="filter_dropdown_container">{filterChild()}</div>
            )}
          </div>
        )}
      </div>

      {columns.length > 0 && data.length > 0 && (
        <div className="table_container">
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                {columns.map((columnConfig, index) => (
                  <th key={index}>
                    {columnConfig.sorting ? (
                      <button
                        type="button"
                        className="table_header_btn"
                        onClick={() => handleSort(columnConfig.column)}
                      >
                        {columnConfig.column}
                        <i
                          className={`sort fa-solid ${
                            sortConfig.column === columnConfig.column
                              ? sortConfig.direction === "asc"
                                ? "fa-sort-up"
                                : "fa-sort-down"
                              : "fa-sort"
                          }`}
                        />
                      </button>
                    ) : (
                      columnConfig.column
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
        </div>
      )}
    </div>
  );
};

export default Table;
