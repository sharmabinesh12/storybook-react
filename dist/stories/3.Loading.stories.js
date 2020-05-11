"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingItem = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Loading = _interopRequireDefault(require("../components/Loading"));

require("../assets/scss/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { action } from '@storybook/addon-actions';
var _default = {
  title: 'Loading',
  component: _Loading.default
};
exports.default = _default;

var LoadingItem = function LoadingItem() {
  return /*#__PURE__*/_react.default.createElement(_Loading.default, {
    loading: true
  });
};

exports.LoadingItem = LoadingItem;