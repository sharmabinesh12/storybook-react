"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleButton = function ToggleButton(props) {
  var name = props.name,
      id = props.id,
      label = props.label,
      isChecked = props.isChecked,
      onChange = props.onChange,
      disabled = props.disabled;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    className: "toggle__checkbox",
    id: id,
    onChange: onChange,
    defaultChecked: isChecked,
    disabled: disabled,
    name: name
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, label));
};

ToggleButton.propTypes = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  label: _propTypes.default.string,
  isChecked: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool
};
ToggleButton.defaultProps = {
  id: '',
  label: '',
  isChecked: false,
  onChange: null,
  disabled: false
};
var _default = ToggleButton;
exports.default = _default;