"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Snackbar = function Snackbar(_ref) {
  var style = _ref.style,
      icon = _ref.icon,
      color = _ref.color,
      text = _ref.text,
      buttons = _ref.buttons;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: style
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: color
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: icon,
    alt: "icon"
  })), /*#__PURE__*/_react.default.createElement("p", null, text), /*#__PURE__*/_react.default.createElement("div", {
    className: "snackbar-buttons"
  }, buttons ? buttons.map(function (btn, i) {
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      type: "button",
      addClass: "",
      key: i,
      icon: btn.icon,
      location: btn.location ? btn.location : "",
      text: btn.text,
      onClick: btn.onClick.bind(_this, btn.actionObj, btn.pageNum ? btn.pageNum : "", btn.agentSaveBtn ? btn.agentSaveBtn : "")
    });
  }) : null)));
};

Snackbar.propTypes = {
  style: _propTypes.default.string,
  icon: _propTypes.default.string,
  color: _propTypes.default.string,
  text: _propTypes.default.string,
  buttons: _propTypes.default.array
};
Snackbar.defaultProps = {
  style: '',
  icon: '',
  color: '',
  text: '',
  buttons: []
};
var _default = Snackbar;
exports.default = _default;