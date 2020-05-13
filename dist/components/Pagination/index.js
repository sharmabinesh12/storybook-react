"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ic_chevron_first_teal = _interopRequireDefault(require("../../assets/img/icons/ic_chevron_first_teal.png"));

var _ic_chevron_last_teal = _interopRequireDefault(require("../../assets/img/icons/ic_chevron_last_teal.png"));

var _ic_chevron_next_teal = _interopRequireDefault(require("../../assets/img/icons/ic_chevron_next_teal.png"));

var _ic_chevron_previous_teal = _interopRequireDefault(require("../../assets/img/icons/ic_chevron_previous_teal.png"));

var _Form = require("../Form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(props) {
  var LIST_SIZE = props.LIST_SIZE,
      pageNumber = props.pageNumber; // props.setListPageNumber(1)
  // const handlePaginationList = filterObj =>{
  //   // currentTempPageNumber = filterObj.pageNumber;
  //   props.setListPageNumber(filterObj.pageNumber);
  //   delete filterObj.pageNumber;
  //   props.handlePaginationList(filterObj);
  // }

  var onClickpaginationCB = function onClickpaginationCB(action, pageNum) {
    pageNum = parseInt(pageNum);
    var pageNumber = props.pageNumber;

    switch (action) {
      case 'first':
        if (pageNumber !== 1) {
          callparticularAPI(1);
        }

        break;

      case 'previous':
        if (pageNum > 1) {
          callparticularAPI(pageNum - 1);
        }

        break;

      case 'next':
        if (pageNum < getTotalPage()) {
          callparticularAPI(pageNum + 1);
        }

        break;

      case 'last':
        if (pageNumber !== getTotalPage()) {
          callparticularAPI(getTotalPage());
        }

        break;

      case 'jump':
        if (pageNum < 1 || pageNum > getTotalPage()) {
          handleFlashMessage("Page number should be in range", "error");
        } else {
          callparticularAPI(pageNum);
        }

        break;

      default:
        break;
    }
  };

  var callparticularAPI = function callparticularAPI(pageNumber) {
    var filter = {
      "skip": String((pageNumber - 1) * LIST_SIZE),
      "limit": LIST_SIZE
    }; // if(props.dirtyStatus.__dirty) {
    //   props.pagination_confirmation({...filter, pageNumber});
    // } else {
    // currentTempPageNumber = pageNumber;

    props.setListPageNumber(pageNumber);
    props.handlePaginationList(filter); // }
  };

  var handlePageNumberChange = function handlePageNumberChange(e) {
    props.setListPageNumber(e.target.value);
  };

  var updateJumpPageNumber = function updateJumpPageNumber(e) {
    if (e.keyCode === 13) {
      onClickpaginationCB('jump', props.pageNumber);
    }
  };

  var handleFlashMessage = function handleFlashMessage(data, notifyType) {
    var elem = notifyType === "error" ? document.getElementById('flash-error') : document.getElementById('flash-success');

    if (elem) {
      elem.innerHTML = JSON.stringify(data);
      elem.style.display = "block";
      setTimeout(function () {
        elem.style.display = "none";
      }, 3000);
    }
  };

  var getTotalPage = function getTotalPage() {
    var maxCount = props.maxCount;
    var totalPage = maxCount ? parseInt(maxCount / LIST_SIZE + (maxCount % LIST_SIZE === 0 ? 0 : 1)) : 1;
    return totalPage;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-view-common"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "flash-error",
    className: "flash flash-error"
  }, "Something went wrong. Please try again!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "display-flex-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return onClickpaginationCB("first", pageNumber);
    },
    className: "inner-alignment",
    title: "First page"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _ic_chevron_first_teal.default,
    alt: "logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return onClickpaginationCB("previous", pageNumber);
    },
    className: "inner-alignment",
    title: "Previous page"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _ic_chevron_previous_teal.default,
    alt: "logo"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "display-flex-row input-box"
  }, /*#__PURE__*/_react.default.createElement(_Form.Input, {
    className: "page-input-field",
    type: "number",
    min: "1",
    max: getTotalPage(),
    value: pageNumber,
    onChange: function onChange(e) {
      return handlePageNumberChange(e);
    },
    onKeyDown: function onKeyDown(e) {
      return updateJumpPageNumber(e);
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "page-number-field"
  }, " of ", getTotalPage())), /*#__PURE__*/_react.default.createElement("div", {
    className: "display-flex-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return onClickpaginationCB("next", pageNumber);
    },
    className: "inner-alignment",
    title: "Next page"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _ic_chevron_next_teal.default,
    alt: "logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return onClickpaginationCB("last", pageNumber);
    },
    className: "inner-alignment",
    title: "Last page"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _ic_chevron_last_teal.default,
    alt: "logo"
  }))));
};

Pagination.propTypes = {
  maxCount: _propTypes.default.number,
  pageNumber: _propTypes.default.number,
  LIST_SIZE: _propTypes.default.number,
  handlePaginationList: _propTypes.default.func,
  setListPageNumber: _propTypes.default.func
};
Pagination.defaultProps = {
  maxCount: 1,
  pageNumber: 2,
  LIST_SIZE: 15,
  handlePaginationList: null,
  setListPageNumber: null
};
var _default = Pagination;
exports.default = _default;