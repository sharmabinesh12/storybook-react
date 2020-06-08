"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(_ref) {
  var type = _ref.type,
      maxLength = _ref.maxLength,
      minLength = _ref.minLength,
      pattern = _ref.pattern,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      size = _ref.size,
      spellCheck = _ref.spellCheck,
      className = _ref.className,
      id = _ref.id,
      disabled = _ref.disabled,
      value = _ref.value,
      required = _ref.required,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      errorMessage = _ref.errorMessage,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onKeyDown = _ref.onKeyDown;

  var renderLabel = function renderLabel(text, htmlFor) {
    if (text === undefined) return null;
    return /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: htmlFor
    }, text, required && ' *');
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input"
  }, renderLabel(label, id, required), /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    maxLength: maxLength,
    minLength: minLength,
    pattern: pattern,
    placeholder: placeholder,
    readOnly: readOnly,
    size: size,
    spellCheck: spellCheck,
    id: id,
    disabled: disabled,
    value: value,
    required: required,
    name: name,
    onChange: onChange,
    className: className,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "input__error-message"
  }, errorMessage));
}

Input.propTypes = {
  type: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  maxLength: _propTypes.default.number,
  minLength: _propTypes.default.number,
  pattern: _propTypes.default.any,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  size: _propTypes.default.string,
  spellCheck: _propTypes.default.string,
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  value: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  label: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onKeyDown: _propTypes.default.func
};
var _default = Input;
exports.default = _default;