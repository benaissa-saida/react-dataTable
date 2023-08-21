"use strict";

var _interopRequireDefault = require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("/Users/mikasa/Desktop/library-react/mik-datatable/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function Entries(_ref) {
  var onEntriesChange = _ref.onEntriesChange;
  var optionsEntries = [10, 25, 50, 100];
  var _useState = (0, _react.useState)(10),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    entries = _useState2[0],
    setEntries = _useState2[1];
  var onInputChange = function onInputChange(value) {
    setEntries(value);
    onEntriesChange(value);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      children: ["Show", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
        value: entries,
        onChange: function onChange(e) {
          return onInputChange(e.target.value);
        },
        children: optionsEntries.map(function (el) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: el,
            children: el
          }, el);
        })
      }), " ", "entries"]
    })
  });
}
var _default = Entries;
exports.default = _default;