"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Textarea(_ref) {
  var cols = _ref.cols,
      rows = _ref.rows,
      wrap = _ref.wrap,
      disabled = _ref.disabled,
      id = _ref.id,
      className = _ref.className,
      name = _ref.name,
      value = _ref.value,
      required = _ref.required,
      placeholder = _ref.placeholder,
      maxLength = _ref.maxLength,
      onChange = _ref.onChange,
      readOnly = _ref.readOnly,
      label = _ref.label,
      errorMessage = _ref.errorMessage;

  var renderLabel = function renderLabel(text, htmlFor) {
    if (text === undefined) return null;
    return /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: htmlFor
    }, text, required && ' *');
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "textarea"
  }, renderLabel(label, id, required), /*#__PURE__*/_react.default.createElement("textarea", {
    onChange: onChange,
    rows: parseInt(rows),
    cols: parseInt(cols),
    required: required,
    readOnly: readOnly,
    placeholder: placeholder,
    name: name,
    maxLength: maxLength,
    disabled: disabled,
    id: id,
    value: value,
    wrap: wrap,
    className: className
  }), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "input__error-message"
  }, errorMessage));
}

Textarea.defaultProps = {
  cols: 50,
  rows: 5
};
Textarea.propTypes = {
  cols: _propTypes.default.number,
  rows: _propTypes.default.number,
  wrap: _propTypes.default.string,
  maxLength: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  required: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  label: _propTypes.default.string,
  errorMessage: _propTypes.default.string
};
var _default = Textarea;
exports.default = _default;