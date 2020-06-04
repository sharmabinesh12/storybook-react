"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(_ref) {
  var itemObj = _ref.itemObj,
      textValue = _ref.textValue,
      onClickLi = _ref.onClickLi,
      selectedId = _ref.selectedId,
      activeIcon = _ref.activeIcon,
      arrowIcon = _ref.arrowIcon,
      activeBGColor = _ref.activeBGColor,
      activeColor = _ref.activeColor;
  var selectedStyle = selectedId === itemObj.id ? {
    background: activeBGColor,
    color: activeColor,
    fontWeight: "700"
  } : {};
  return /*#__PURE__*/_react.default.createElement("li", {
    title: textValue,
    className: "list-box-common",
    style: selectedStyle,
    key: itemObj.id,
    onClick: function onClick() {
      return onClickLi(itemObj);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, textValue), selectedId === itemObj.id ? /*#__PURE__*/_react.default.createElement("img", {
    src: activeIcon,
    alt: "right arrow"
  }) : /*#__PURE__*/_react.default.createElement("img", {
    src: arrowIcon,
    alt: "right arrow"
  }));
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