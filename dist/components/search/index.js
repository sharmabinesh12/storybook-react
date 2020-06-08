"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Searchbox = function Searchbox(_ref) {
  var SearchLogo = _ref.SearchLogo,
      Close = _ref.Close,
      onSearchInput = _ref.onSearchInput,
      placeholder = _ref.placeholder,
      searchValue = _ref.searchValue,
      closeButtonCB = _ref.closeButtonCB;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-view-common"
  }, SearchLogo && /*#__PURE__*/_react.default.createElement("img", {
    src: SearchLogo,
    alt: "logo"
  }), /*#__PURE__*/_react.default.createElement("input", {
    className: "search-button",
    onChange: onSearchInput,
    type: "text",
    autoFocus: true,
    placeholder: placeholder,
    value: searchValue
  }), Close && /*#__PURE__*/_react.default.createElement("img", {
    src: Close,
    className: "close-button",
    onClick: closeButtonCB,
    alt: "logo"
  }));
};

Searchbox.propTypes = {
  SearchLogo: _propTypes.default.string,
  Close: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  searchValue: _propTypes.default.string,
  closeButtonCB: _propTypes.default.func,
  onSearchInput: _propTypes.default.func
};
Searchbox.defaultProps = {
  SearchLogo: '',
  Close: '',
  placeholder: '',
  searchValue: '',
  closeButtonCB: null,
  onSearchInput: null
};
var _default = Searchbox;
exports.default = _default;