"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(props) {
  var children = props.children,
      disabled = props.disabled,
      onSelect = props.onSelect,
      type = props.type;
  return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: children,
    onClick: onSelect,
    text: children,
    disabled: disabled,
    type: type
  }));
};

MenuItem.propTypes = {
  disabled: _propTypes.default.bool,
  onSelect: _propTypes.default.func
};
MenuItem.defaultProps = {
  disabled: false
};
var _default = MenuItem;
exports.default = _default;