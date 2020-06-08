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

var Menu = /*#__PURE__*/function (_Component) {
  _inherits(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      var isMenuOpen = _this.state.isMenuOpen;

      if (!isMenuOpen) {
        return;
      }

      var buttonBoundary = _this.getBoundary();

      if (_this.isInsideBoundary(event, buttonBoundary)) {
        _this.onMenuTrigger();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getBoundary", function () {
      var _this$wrapperRef$getB = _this.wrapperRef.getBoundingClientRect(),
          left = _this$wrapperRef$getB.left,
          width = _this$wrapperRef$getB.width,
          top = _this$wrapperRef$getB.top,
          height = _this$wrapperRef$getB.height;

      return {
        X: {
          min: left,
          max: left + width
        },
        Y: {
          min: top,
          max: top + height
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "isInsideBoundary", function (event, boundary) {
      return boundary.X.max < event.clientX || event.clientX < boundary.X.min || boundary.Y.max < event.clientY || event.clientY < boundary.Y.min;
    });

    _defineProperty(_assertThisInitialized(_this), "triggerMenuRef", function (node) {
      _this.wrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "onMenuTrigger", function () {
      _this.setState(function (prevState) {
        return {
          isMenuOpen: !prevState.isMenuOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setlistRefs", function (node) {
      var isMenuOpen = _this.state.isMenuOpen;
      if (!isMenuOpen) return;
      var listRect = node.getBoundingClientRect();

      var triggerRect = _this.wrapperRef.getBoundingClientRect();

      var positionState = {
        horizontalPlacement: 'right',
        verticalPlacement: 'bottom'
      };

      if (triggerRect.left + listRect.width > window.innerWidth) {
        positionState.horizontalPlacement = 'left';
      } else if (listRect.left < 0) {
        positionState.horizontalPlacement = 'right';
      }

      if (triggerRect.top + listRect.height > window.innerHeight) {
        _this.listDom = node;
        positionState.verticalPlacement = 'top';
      } else if (listRect.top < 0) {
        _this.listDom = node;
        positionState.verticalPlacement = 'bottom';
      }

      _this.setState({
        positionState: positionState
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getClassName", function () {
      var positionState = _this.state.positionState;
      var className = '';

      if (positionState) {
        className += " menu-container--horizontal-".concat(positionState.horizontalPlacement);
        if (_this.listDom) _this.listDom.style.bottom = "".concat(_this.wrapperRef.getBoundingClientRect().height + 4, "px");
      }

      return className;
    });

    _defineProperty(_assertThisInitialized(_this), "renderMenuList", function (menuItems) {
      return menuItems;
    });

    _this.state = {
      isMenuOpen: false
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('click', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          menuListItems = _this$props.menuListItems;
      var isMenuOpen = this.state.isMenuOpen;
      var listContainerClass = "menu-container__list-container ".concat(className, " ").concat(this.getClassName());
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "menu-container",
        onClick: function onClick(e) {
          return _this2.onMenuTrigger(e);
        },
        ref: this.triggerMenuRef
      }, children, isMenuOpen ? /*#__PURE__*/_react.default.createElement("div", {
        className: listContainerClass,
        ref: this.setlistRefs,
        id: "listDom"
      }, this.renderMenuList(menuListItems)) : null));
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = {
  className: _propTypes.default.string
};
Menu.defaultProps = {
  className: ''
};
var _default = Menu;
exports.default = _default;