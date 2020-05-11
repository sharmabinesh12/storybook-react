"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pagination(props) {
  var onPageChange = props.onPageChange,
      disablePrev = props.disablePrev,
      disableNext = props.disableNext,
      page = props.page,
      minPage = props.minPage,
      maxPage = props.maxPage;

  var isPrevious = function isPrevious(value) {
    return value === 'prev' && page > minPage;
  };

  var isNext = function isNext(value) {
    return value === 'next' && page < maxPage;
  };

  var pageHandler = function pageHandler(e) {
    var value = e.target.value;
    var newPage;

    if (isPrevious(value)) {
      newPage = page - 1;
    } else if (isNext(value)) {
      newPage = page + 1;
    }

    if (newPage) {
      onPageChange(newPage);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "pagination__button pagination__button--prev",
    onClick: function onClick(e) {
      return pageHandler(e);
    },
    value: "prev",
    disabled: disablePrev
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "pagination__button",
    disabled: true
  }, page), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "pagination__button pagination__button--next",
    onClick: function onClick(e) {
      return pageHandler(e);
    },
    value: "next",
    disabled: disableNext
  }));
}

Pagination.propTypes = {
  onPageChange: _propTypes.default.func,
  disableNext: _propTypes.default.bool,
  disablePrev: _propTypes.default.bool,
  page: _propTypes.default.number,
  minPage: _propTypes.default.number,
  maxPage: _propTypes.default.number
};
Pagination.defaultProps = {
  onPageChange: function onPageChange() {},
  disablePrev: true,
  disableNext: false,
  page: 1,
  minPage: 1,
  maxPage: 999
};
var _default = Pagination;
exports.default = _default;