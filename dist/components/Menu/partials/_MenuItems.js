"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItems = function MenuItems(props) {
  var children = props.children;
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "menu-container__list-container__list"
  }, children);
};

var _default = MenuItems;
exports.default = _default;