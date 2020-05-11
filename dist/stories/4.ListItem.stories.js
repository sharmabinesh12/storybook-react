"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ListItem = _interopRequireDefault(require("../components/ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'ListItem',
  component: _ListItem.default
};
exports.default = _default;
(0, _react2.storiesOf)('Button', module).add('default', function () {
  var listItems = [{
    name: 'list1',
    id: '1235'
  }, {
    name: 'List2',
    id: '1234'
  }];
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-group"
  }, listItems.map(function (itemObj, i) {
    return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      itemObj: itemObj,
      textValue: itemObj.name,
      onClickLi: (0, _addonActions.action)('clicking list'),
      selectedId: "1234"
    });
  }));
}).add('selected Item', function () {
  return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    itemObj: {
      'name': 'List2',
      'id': '1234'
    },
    textValue: "list2",
    onClickLi: (0, _addonActions.action)('selected item'),
    selectedId: "1234"
  });
});