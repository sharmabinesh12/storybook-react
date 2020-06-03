"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecognizedValueCard = function RecognizedValueCard(_ref) {
  var background = _ref.background,
      color = _ref.color,
      displayName = _ref.displayName,
      isEdit = _ref.isEdit,
      value = _ref.value,
      resolved = _ref.resolved,
      handleEditParamChange = _ref.handleEditParamChange,
      handleEditDone = _ref.handleEditDone,
      editResolvedParam = _ref.editResolvedParam,
      handleDeleteParamConfirmation = _ref.handleDeleteParamConfirmation,
      Save_Logo = _ref.Save_Logo,
      Edit_Logo = _ref.Edit_Logo;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "right-inner-single",
    style: {
      backgroundColor: background,
      color: color
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "right-inner-list"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "name-recipeint"
  }, displayName, ":"), isEdit ? /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: value,
    onChange: handleEditParamChange,
    placeholder: "Enter new value",
    style: {
      backgroundColor: background,
      color: color,
      borderBottom: '1px solid #000'
    }
  }) : resolved ? /*#__PURE__*/_react.default.createElement("div", {
    className: "resolved-value",
    title: value
  }, value) : /*#__PURE__*/_react.default.createElement("div", null, "NA")), /*#__PURE__*/_react.default.createElement("div", {
    className: "edit"
  }, isEdit ? /*#__PURE__*/_react.default.createElement("img", {
    src: Save_Logo,
    className: "save-icon",
    alt: "save icon",
    onClick: handleEditDone
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Edit_Logo && /*#__PURE__*/_react.default.createElement("img", {
    src: Edit_Logo,
    className: "edit-icon",
    alt: "edit icon",
    onClick: editResolvedParam
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "cross-icon",
    onClick: handleDeleteParamConfirmation,
    style: !resolved ? {
      opacity: '0.2',
      pointerEvents: 'none',
      cursor: 'none'
    } : {}
  }))));
};

RecognizedValueCard.propTypes = {
  handleEditParamChange: _propTypes.default.func
};
RecognizedValueCard.defaultProps = {
  handleEditParamChange: null
};
var _default = RecognizedValueCard;
exports.default = _default;