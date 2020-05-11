"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonPartial = function ButtonPartial(type, args) {
  var buttonDom = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  if (type === 'cancel') {
    buttonDom = /*#__PURE__*/_react.default.createElement(_Button.default, {
      key: args.cancelText,
      text: args.cancelText,
      color: "red",
      size: "big",
      className: "modal__content__footer--cancel-button",
      onClick: args.disableCancel === 'disabled' ? null : args.onCancel,
      disabled: args.disableCancel
    });
  } else if (type === 'save') {
    buttonDom = /*#__PURE__*/_react.default.createElement(_Button.default, {
      key: args.submitText,
      text: args.submitText,
      color: "blue",
      size: "big",
      className: "modal__content__footer--submit-button",
      onClick: args.disableSubmit === 'disabled' ? null : args.onSubmit,
      disabled: args.disableSubmit
    });
  }

  return buttonDom;
};

var _default = ButtonPartial;
exports.default = _default;
_Button.default.propTypes = {
  args: _propTypes.default.shape({
    onCancel: _propTypes.default.func,
    onSubmit: _propTypes.default.func,
    cancelText: _propTypes.default.string,
    submitText: _propTypes.default.string,
    disableCancel: _propTypes.default.bool,
    disableSubmit: _propTypes.default.bool
  })
};
_Button.default.defaultProps = {
  args: {
    cancelText: 'Cancel',
    submitText: 'Submit',
    disableCancel: false,
    disableSubmit: false
  }
};