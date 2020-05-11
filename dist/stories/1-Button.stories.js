"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("../components/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Button',
  component: _Button.default
};
exports.default = _default;
(0, _react2.storiesOf)('Button', module).add('default', function () {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: "default",
    text: "default"
  });
}).add('default-with-callback', function () {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: "default-with-callback",
    text: "with callback",
    onClick: (0, _addonActions.action)('default')
  });
}).add('big-blue', function () {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: "big-blue",
    text: "Blue",
    color: "blue",
    size: "big",
    onClick: (0, _addonActions.action)('default')
  });
}).add('big-disabled', function () {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: "big-disabled",
    text: "big disabled",
    size: "big",
    disabled: "disabled"
  });
});