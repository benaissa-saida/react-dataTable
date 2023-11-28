import React, { useEffect, useState, useMemo } from "react";
import Header from "./components/header";
import Pagination from "./components/pagination";
import Search from "./components/search";
import "./default.css";
import Entries from "./components/entries";
import isValidDate from "date-fns/isValid";

const DataTable = ({ data, headers }) => {
  const [employeesList, setEmployeesList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [sorting, setSorting] = useState({ field: "", order: "asc" });

  useEffect(() => {
    if (data.length > 0) {
      const firstField = Object.keys(data[0])[0];
      setSorting({ field: firstField, order: "asc" });
      setEmployeesList(data);
    }
  }, [data]);

  const employeesListData = useMemo(() => {
    let computedEmployeesList = employeesList;

    if (search) {
      computedEmployeesList = computedEmployeesList.filter((obj) => {
        //filter if search includes value of field tolowercase
        //else filter if search includes value of field
        for (const key in obj) {
          if (
            typeof obj[key] === "string" &&
            obj[key].toLowerCase().includes(search.toLowerCase())
          ) {
            return true;
          } else if (obj[key].includes(search)) {
            return true;
          }
        }
        return false;
      });
    }

    setTotalItems(computedEmployeesList.length);

    const reversed = sorting.order === "asc" ? 1 : -1;

    //Sorting employeesList
    computedEmployeesList = computedEmployeesList.sort((a, b) => {
      if (
        isValidDate(new Date(a[sorting.field])) ||
        isValidDate(new Date(b[sorting.field]))
      ) {
        return (
          reversed *
          (new Date(a[sorting.field]).getTime() -
            new Date(b[sorting.field]).getTime())
        );
      } else if (sorting.field !== "") {
        return reversed * a[sorting.field].localeCompare(b[sorting.field]);
      } else {
        return [];
      }
    });
    setStartIndex((currentPage - 1) * entries);
    setEndIndex(startIndex + entries);

    //Current Page slice
    return computedEmployeesList.slice(startIndex, endIndex);
  }, [
    employeesList,
    currentPage,
    search,
    sorting,
    startIndex,
    endIndex,
    entries,
  ]);

  return (
    <div className="dataTables_wrapper no-footer">
      <div className="dataTables_length">
        <Entries
          onEntriesChange={(value) => {
            setEntries(value);
          }}
        />
      </div>
      <div className="dataTables_filter">
        <Search
          onSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />
      </div>

      <table className="display dataTable no-footer">
        <Header
          headers={headers}
          onSorting={(field, order) => setSorting({ field, order })}
          field={sorting.field}
        />
        <tbody>
          {!employeesListData.length && (
            <tr className="odd">
              <td colSpan="9" className="dataTables_empty">
                No matching records found
              </td>
            </tr>
          )}
          {employeesList.length && employeesListData ? (
            employeesListData.map((employee, idx) => {
              return (
                <tr key={idx} className={idx % 2 === 0 ? "even" : "odd"}>
                  {headers.map((col, colIdx) => (
                    <td key={`${idx}-${colIdx}`}>{employee[col.field]}</td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr className="odd">
              <td colSpan="9" className="dataTables_empty">
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="dataTables_info">
        {search ? (
          <span>
            {!employeesListData.length ? (
              <span>Showing {startIndex} to </span>
            ) : (
              <span>Showing {startIndex + 1} to </span>
            )}
            {Math.min(endIndex, employeesListData.length)} of{" "}
            {employeesListData.length} entries. (filtered from{" "}
            {employeesList.length} total entries)
          </span>
        ) : (
          <span>
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, employeesList.length)} of {employeesList.length}{" "}
            entries.
          </span>
        )}
      </div>

      <Pagination
        total={totalItems}
        itemsPerPage={entries}
        currentPage={employeesListData.length ? currentPage : 0}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default DataTable;
