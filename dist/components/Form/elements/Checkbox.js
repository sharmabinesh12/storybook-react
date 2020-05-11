"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Checkbox(_ref) {
  var className = _ref.className,
      id = _ref.id,
      required = _ref.required,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      readOnly = _ref.readOnly,
      tabIndex = _ref.tabIndex,
      value = _ref.value,
      _onChange = _ref.onChange;
  var classes = ['checkbox', className].toString().replace(/,+/g, ' ').trim();

  var renderLabel = function renderLabel(label, htmlFor) {
    return /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: htmlFor
    }, label, required && ' *');
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    className: "hidden",
    readOnly: readOnly,
    tabIndex: tabIndex,
    type: "checkbox",
    value: value,
    onChange: function onChange(e) {
      return _onChange(e);
    }
  }), renderLabel(text, id));
}

Checkbox.propTypes = {
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  required: _propTypes.default.bool,
  text: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  tabIndex: _propTypes.default.string,
  value: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
Checkbox.defaultProps = {
  onChange: function onChange() {}
};
var _default = Checkbox;
exports.default = _default;