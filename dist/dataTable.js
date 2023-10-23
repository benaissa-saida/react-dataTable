"use strict";

var _interopRequireWildcard = require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;
var _interopRequireDefault = require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _react = _interopRequireWildcard(require("react"));
var _header = _interopRequireDefault(require("./components/header"));
var _pagination = _interopRequireDefault(require("./components/pagination"));
var _search = _interopRequireDefault(require("./components/search"));
require("./default.css");
var _entries = _interopRequireDefault(require("./components/entries"));
var _isValid = _interopRequireDefault(require("date-fns/isValid"));
var _jsxRuntime = require("react/jsx-runtime");
var DataTable = function DataTable(_ref) {
  var data = _ref.data,
    headers = _ref.headers;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    employeesList = _useState2[0],
    setEmployeesList = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    totalItems = _useState4[0],
    setTotalItems = _useState4[1];
  var _useState5 = (0, _react.useState)(1),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    startIndex = _useState8[0],
    setStartIndex = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    endIndex = _useState10[0],
    setEndIndex = _useState10[1];
  var _useState11 = (0, _react.useState)(""),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    search = _useState12[0],
    setSearch = _useState12[1];
  var _useState13 = (0, _react.useState)(10),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
    entries = _useState14[0],
    setEntries = _useState14[1];
  var _useState15 = (0, _react.useState)(""),
    _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
    firstField = _useState16[0],
    setFirstField = _useState16[1];
  var _useState17 = (0, _react.useState)({
      field: firstField,
      order: "asc"
    }),
    _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
    sorting = _useState18[0],
    setSorting = _useState18[1];
  (0, _react.useEffect)(function () {
    setEmployeesList(data);
    if (data.length > 0) {
      setFirstField(Object.keys(data[0])[0]);
    }
  }, [data, setFirstField]);
  var employeesListData = (0, _react.useMemo)(function () {
    console.log(employeesList);
    var computedEmployeesList = employeesList;
    if (search) {
      computedEmployeesList = computedEmployeesList.filter(function (obj) {
        //filter if search includes value of field tolowercase
        //else filter if search includes value of field
        for (var key in obj) {
          if (typeof obj[key] === "string" && obj[key].toLowerCase().includes(search.toLowerCase())) {
            return true;
          } else if (obj[key].includes(search)) {
            return true;
          }
        }
        return false;
      });
      console.log(computedEmployeesList);
    }
    setTotalItems(computedEmployeesList.length);
    var reversed = sorting.order === "asc" ? 1 : -1;

    //Sorting employeesList
    computedEmployeesList = computedEmployeesList.sort(function (a, b) {
      if ((0, _isValid.default)(new Date(a[sorting.field])) || (0, _isValid.default)(new Date(b[sorting.field]))) {
        return reversed * (new Date(a[sorting.field]).getTime() - new Date(b[sorting.field]).getTime());
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
  }, [employeesList, currentPage, search, sorting, startIndex, endIndex, entries]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "dataTables_wrapper no-footer",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "dataTables_length",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_entries.default, {
        onEntriesChange: function onEntriesChange(value) {
          setEntries(value);
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "dataTables_filter",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_search.default, {
        onSearch: function onSearch(value) {
          setSearch(value);
          setCurrentPage(1);
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
      className: "display dataTable no-footer",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_header.default, {
        headers: headers,
        onSorting: function onSorting(field, order) {
          return setSorting({
            field: field,
            order: order
          });
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("tbody", {
        children: [!employeesListData.length && /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
          className: "odd",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
            colSpan: "9",
            className: "dataTables_empty",
            children: "No matching records found"
          })
        }), employeesList.length && employeesListData ? employeesListData.map(function (employee, idx) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
            className: idx % 2 === 0 ? "even" : "odd",
            children: headers.map(function (col, colIdx) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                children: employee[col.field]
              }, "".concat(idx, "-").concat(colIdx));
            })
          }, idx);
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
          className: "odd",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
            colSpan: "9",
            className: "dataTables_empty",
            children: "No data available in table"
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "dataTables_info",
      children: search ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        children: [!employeesListData.length ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          children: ["Showing ", startIndex, " to "]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          children: ["Showing ", startIndex + 1, " to "]
        }), Math.min(endIndex, employeesListData.length), " of", " ", employeesListData.length, " entries. (filtered from", " ", employeesList.length, " total entries)"]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        children: ["Showing ", startIndex + 1, " to", " ", Math.min(endIndex, employeesList.length), " of ", employeesList.length, " ", "entries."]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_pagination.default, {
      total: totalItems,
      itemsPerPage: entries,
      currentPage: employeesListData.length ? currentPage : 0,
      onPageChange: function onPageChange(page) {
        return setCurrentPage(page);
      }
    })]
  });
};
var _default = DataTable;
exports.default = _default;