"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloWorldItem = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HelloWorld = _interopRequireDefault(require("../components/HelloWorld"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { action } from '@storybook/addon-actions';
var _default = {
  title: 'HelloWorld',
  component: _HelloWorld.default
};
exports.default = _default;

var HelloWorldItem = function HelloWorldItem() {
  return /*#__PURE__*/_react.default.createElement(_HelloWorld.default, null);
};

exports.HelloWorldItem = HelloWorldItem;