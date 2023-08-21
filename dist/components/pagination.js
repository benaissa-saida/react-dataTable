"use strict";

var _interopRequireWildcard = require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;
var _interopRequireDefault = require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var Pagination = function Pagination(_ref) {
  var _ref$total = _ref.total,
    total = _ref$total === void 0 ? 0 : _ref$total,
    _ref$itemsPerPage = _ref.itemsPerPage,
    itemsPerPage = _ref$itemsPerPage === void 0 ? 5 : _ref$itemsPerPage,
    _ref$currentPage = _ref.currentPage,
    currentPage = _ref$currentPage === void 0 ? 1 : _ref$currentPage,
    onPageChange = _ref.onPageChange;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    totalPages = _useState2[0],
    setTotalPages = _useState2[1];
  (0, _react.useEffect)(function () {
    if (total > 0 && itemsPerPage > 0) setTotalPages(Math.ceil(total / itemsPerPage));
  }, [total, itemsPerPage]);
  var paginationItems = (0, _react.useMemo)(function () {
    var pages = [];
    var _loop = function _loop(i) {
      pages.push( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: i === currentPage ? "paginate_button current" : "paginate_button",
        onClick: function onClick() {
          return onPageChange(i);
        },
        children: i
      }, i));
    };
    for (var i = 1; i <= totalPages; i++) {
      _loop(i);
    }
    return pages;
  }, [totalPages, currentPage, onPageChange]);
  if (totalPages === 0) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "dataTables_paginate paging_simple_numbers",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: function onClick() {
        return onPageChange(currentPage - 1);
      },
      disabled: 1 === currentPage,
      className: 1 === currentPage ? "paginate_button previous disabled" : "paginate_button previous",
      children: "Previous"
    }), paginationItems, /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: function onClick() {
        return onPageChange(currentPage + 1);
      },
      disabled: totalPages === currentPage,
      className: totalPages === currentPage ? "paginate_button next disabled" : "paginate_button next",
      children: "Next"
    })]
  });
};
var _default = Pagination;
exports.default = _default;