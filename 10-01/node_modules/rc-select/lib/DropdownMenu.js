'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _toArray = require('rc-util/lib/Children/toArray');

var _toArray2 = _interopRequireDefault(_toArray);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _domScrollIntoView = require('dom-scroll-into-view');

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DropdownMenu = (0, _createReactClass2['default'])({
  propTypes: {
    defaultActiveFirstOption: _propTypes2['default'].bool,
    value: _propTypes2['default'].any,
    dropdownMenuStyle: _propTypes2['default'].object,
    multiple: _propTypes2['default'].bool,
    onPopupFocus: _propTypes2['default'].func,
    onMenuDeSelect: _propTypes2['default'].func,
    onMenuSelect: _propTypes2['default'].func,
    prefixCls: _propTypes2['default'].string,
    menuItems: _propTypes2['default'].any,
    inputValue: _propTypes2['default'].string,
    visible: _propTypes2['default'].bool
  },

  componentWillMount: function componentWillMount() {
    this.lastInputValue = this.props.inputValue;
  },
  componentDidMount: function componentDidMount() {
    this.scrollActiveItemToView();
    this.lastVisible = this.props.visible;
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    if (!nextProps.visible) {
      this.lastVisible = false;
    }
    // freeze when hide
    return nextProps.visible;
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var props = this.props;
    if (!prevProps.visible && props.visible) {
      this.scrollActiveItemToView();
    }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
  },
  scrollActiveItemToView: function scrollActiveItemToView() {
    // scroll into view
    var itemComponent = (0, _reactDom.findDOMNode)(this.firstActiveItem);
    if (itemComponent) {
      (0, _domScrollIntoView2['default'])(itemComponent, (0, _reactDom.findDOMNode)(this.refs.menu), {
        onlyScrollIfNeeded: true
      });
    }
  },
  renderMenu: function renderMenu() {
    var _this = this;

    var props = this.props;
    var menuItems = props.menuItems,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        value = props.value,
        prefixCls = props.prefixCls,
        multiple = props.multiple,
        onMenuSelect = props.onMenuSelect,
        inputValue = props.inputValue;

    if (menuItems && menuItems.length) {
      var menuProps = {};
      if (multiple) {
        menuProps.onDeselect = props.onMenuDeselect;
        menuProps.onSelect = onMenuSelect;
      } else {
        menuProps.onClick = onMenuSelect;
      }

      var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
      var activeKeyProps = {};

      var clonedMenuItems = menuItems;
      if (selectedKeys.length) {
        if (props.visible && !this.lastVisible) {
          activeKeyProps.activeKey = selectedKeys[0];
        }
        var foundFirst = false;
        // set firstActiveItem via cloning menus
        // for scroll into view
        var clone = function clone(item) {
          if (!foundFirst && selectedKeys.indexOf(item.key) !== -1) {
            foundFirst = true;
            return (0, _react.cloneElement)(item, {
              ref: function ref(_ref) {
                _this.firstActiveItem = _ref;
              }
            });
          }
          return item;
        };

        clonedMenuItems = menuItems.map(function (item) {
          if (item.type.isMenuItemGroup) {
            var children = (0, _toArray2['default'])(item.props.children).map(clone);
            return (0, _react.cloneElement)(item, {}, children);
          }
          return clone(item);
        });
      }

      // clear activeKey when inputValue change
      if (inputValue !== this.lastInputValue) {
        activeKeyProps.activeKey = '';
      }

      return _react2['default'].createElement(
        _rcMenu2['default'],
        (0, _extends3['default'])({
          ref: 'menu',
          style: this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirstOption
        }, activeKeyProps, {
          multiple: multiple,
          focusable: false
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: prefixCls + '-menu'
        }),
        clonedMenuItems
      );
    }
    return null;
  },
  render: function render() {
    var renderMenu = this.renderMenu();
    return renderMenu ? _react2['default'].createElement(
      'div',
      {
        style: { overflow: 'auto' },
        onFocus: this.props.onPopupFocus,
        onMouseDown: _util.preventDefaultEvent
      },
      renderMenu
    ) : null;
  }
});

DropdownMenu.displayName = 'DropdownMenu';
exports['default'] = DropdownMenu;
module.exports = exports['default'];