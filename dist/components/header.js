"use strict";

var _interopRequireWildcard = require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;
var _interopRequireDefault = require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _jsxRuntime = require("react/jsx-runtime");
var Header = function Header(_ref) {
  var headers = _ref.headers,
    onSorting = _ref.onSorting;
  var _useState = (0, _react.useState)("firstName"),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    sortingField = _useState2[0],
    setSortingField = _useState2[1];
  var _useState3 = (0, _react.useState)("asc"),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    sortingOrder = _useState4[0],
    setSortingOrder = _useState4[1];
  var onSortingChange = function onSortingChange(field) {
    var order = field === sortingField && sortingOrder === "asc" ? "desc" : "asc";
    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
      children: headers.map(function (_ref2) {
        var name = _ref2.name,
          field = _ref2.field;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
          onClick: function onClick() {
            return onSortingChange(field);
          },
          className: "sorting",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "display",
            children: [name, sortingField && sortingField === field ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              className: "icons-by-default",
              icon: sortingOrder === "asc" ? _freeSolidSvgIcons.faCaretUp : _freeSolidSvgIcons.faCaretDown,
              size: "xs"
            }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "icons-by-default",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faCaretUp,
                size: "xs"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faCaretDown,
                size: "xs"
              })]
            })]
          })
        }, name);
      })
    })
  });
};
var _default = Header;
exports.default = _default;