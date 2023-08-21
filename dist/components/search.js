"use strict";

var _interopRequireDefault = require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var Search = function Search(_ref) {
  var onSearch = _ref.onSearch;
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var onInputChange = function onInputChange(value) {
    setSearch(value);
    onSearch(value);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      htmlFor: "search",
      className: "search",
      children: ["Search:", /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "search",
        type: "text",
        className: "form-control",
        style: {
          width: "240px"
        },
        value: search,
        onChange: function onChange(e) {
          return onInputChange(e.target.value);
        }
      })]
    })
  });
};
var _default = Search;
exports.default = _default;