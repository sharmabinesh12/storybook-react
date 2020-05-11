"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var className = _ref.className,
      size = _ref.size,
      text = _ref.text,
      onClick = _ref.onClick,
      color = _ref.color,
      disabled = _ref.disabled,
      width = _ref.width,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type;
  var classes = ['button', size, color, width, className].toString().replace(/,+/g, ' ').trim();
  var button = type;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: button,
    disabled: disabled,
    className: classes,
    onClick: onClick
  }, text);
}

var _default = Button;
exports.default = _default;