"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Loading = function Loading(props) {
  var styles = _objectSpread(_objectSpread({}, props.styles), {}, {
    borderTop: "3px solid ".concat(props.styles.color)
  });

  var loaderDom = props.loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loader__symbol",
    style: styles
  }), props.description ? /*#__PURE__*/_react.default.createElement("div", {
    className: "loader__text"
  }, props.description) : null) : null;
  return loaderDom;
};

Loading.propTypes = {
  description: _propTypes.default.string,
  loading: _propTypes.default.bool,
  styles: _propTypes.default.object
};
Loading.defaultProps = {
  loading: false,
  styles: {
    color: 'rgb(0, 160, 174)'
  }
};
var _default = Loading;
exports.default = _default;