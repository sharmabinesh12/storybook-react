"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "setWrapperRef", function (node) {
      _this.wrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      var onClose = _this.props.onClose;

      if (event.target === _this.wrapperRef) {
        onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderButton", function (type, args) {
      var component = require('./partials/Button').default;

      return component(type, args);
    });

    _defineProperty(_assertThisInitialized(_this), "renderModalHeader", function (props) {
      var header = props.header,
          onClose = props.onClose;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "modal__content__header",
        style: header.style
      }, header.isRemoveCloseIcon ? null : /*#__PURE__*/_react.default.createElement("span", {
        className: "modal__content__header--close",
        onClick: onClose
      }, "\xD7"), /*#__PURE__*/_react.default.createElement("div", {
        className: "modal__content__header--title"
      }, header.title));
    });

    _defineProperty(_assertThisInitialized(_this), "renderModalFooter", function (props) {
      var footer = props.footer;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, footer ? /*#__PURE__*/_react.default.createElement("div", {
        className: "modal__content__footer",
        style: footer.style
      }, footer.onCancel ? _this.renderButton('cancel', footer) : null, footer.onSubmit ? _this.renderButton('save', footer) : null) : null);
    });

    _defineProperty(_assertThisInitialized(_this), "renderModalBody", function (props) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "modal__content__body"
      }, props.children);
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onClose = _this$props.onClose,
          header = _this$props.header,
          footer = _this$props.footer,
          customStyle = _this$props.customStyle,
          isOpen = _this$props.isOpen;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen ? /*#__PURE__*/_react.default.createElement("div", {
        className: "modal",
        ref: header.closeOnOutsideClick ? this.setWrapperRef : null
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "modal__content",
        style: customStyle
      }, this.renderModalHeader({
        onClose: onClose,
        header: header
      }), this.renderModalBody({
        children: children
      }), this.renderModalFooter({
        footer: footer
      }))) : null);
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  onClose: _propTypes.default.func,
  header: _propTypes.default.shape({
    title: _propTypes.default.string,
    closeOnOutsideClick: _propTypes.default.bool,
    style: _propTypes.default.object
  }),
  footer: _propTypes.default.shape({
    onCancel: _propTypes.default.func,
    onSubmit: _propTypes.default.func,
    cancelText: _propTypes.default.string,
    submitText: _propTypes.default.string,
    disableCancel: _propTypes.default.bool,
    disableSubmit: _propTypes.default.bool,
    customStyle: _propTypes.default.object
  }),
  customStyle: _propTypes.default.object
};
var _default = Modal;
exports.default = _default;
Modal.defaultProps = {
  header: {
    title: '',
    closeOnOutsideClick: false,
    style: {}
  },
  footer: {
    cancelText: 'Cancel',
    submitText: 'Submit',
    disableCancel: false,
    disableSubmit: false,
    customStyle: {}
  },
  customStyle: {}
};