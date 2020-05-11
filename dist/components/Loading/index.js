"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(props) {
  var loaderDom = props.loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loader__symbol"
  }), props.description ? /*#__PURE__*/_react.default.createElement("div", {
    className: "loader__text"
  }, props.description) : null) : null;
  return loaderDom;
};

Loading.propTypes = {
  description: _propTypes.default.string,
  loading: _propTypes.default.bool
};
Loading.defaultProps = {
  loading: false
};
var _default = Loading;
exports.default = _default;