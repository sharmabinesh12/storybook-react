"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./index.scss";
var HelloWorld = function HelloWorld() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: 'red'
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Hello HelloWorld"));
};

var _default = HelloWorld;
exports.default = _default;