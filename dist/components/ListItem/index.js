"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  var selectedStyle = props.selectedId === props.itemObj.id ? {
    background: "#00a0ae",
    color: "#fff",
    fontWeight: "700"
  } : {};
  return /*#__PURE__*/_react.default.createElement("li", {
    title: props.textValue,
    className: "list-box-common",
    style: selectedStyle,
    key: props.itemObj.id,
    onClick: function onClick() {
      return props.onClickLi(props.itemObj);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, props.textValue));
};

ListItem.propTypes = {
  itemObj: _propTypes.default.object,
  textValue: _propTypes.default.string,
  onClickLi: _propTypes.default.func,
  selectedId: _propTypes.default.string
};
ListItem.defaultProps = {
  itemObj: {},
  textValue: '',
  onClickLi: null,
  selectedId: ''
};
var _default = ListItem;
exports.default = _default;