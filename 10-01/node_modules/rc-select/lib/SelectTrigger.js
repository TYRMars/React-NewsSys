'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_rcTrigger2['default'].displayName = 'Trigger';

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger = (0, _createReactClass2['default'])({
  propTypes: {
    onPopupFocus: _propTypes2['default'].func,
    dropdownMatchSelectWidth: _propTypes2['default'].bool,
    dropdownAlign: _propTypes2['default'].object,
    visible: _propTypes2['default'].bool,
    disabled: _propTypes2['default'].bool,
    showSearch: _propTypes2['default'].bool,
    dropdownClassName: _propTypes2['default'].string,
    multiple: _propTypes2['default'].bool,
    inputValue: _propTypes2['default'].string,
    filterOption: _propTypes2['default'].any,
    options: _propTypes2['default'].any,
    prefixCls: _propTypes2['default'].string,
    popupClassName: _propTypes2['default'].string,
    children: _propTypes2['default'].any
  },

  componentDidUpdate: function componentDidUpdate() {
    var _props = this.props,
        visible = _props.visible,
        dropdownMatchSelectWidth = _props.dropdownMatchSelectWidth;

    if (visible) {
      var dropdownDOMNode = this.getPopupDOMNode();
      if (dropdownDOMNode) {
        var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
        dropdownDOMNode.style[widthProp] = _reactDom2['default'].findDOMNode(this).offsetWidth + 'px';
      }
    }
  },
  getInnerMenu: function getInnerMenu() {
    return this.popupMenu && this.popupMenu.refs.menu;
  },
  getPopupDOMNode: function getPopupDOMNode() {
    return this.refs.trigger.getPopupDomNode();
  },
  getDropdownElement: function getDropdownElement(newProps) {
    var props = this.props;
    return _react2['default'].createElement(_DropdownMenu2['default'], (0, _extends3['default'])({
      ref: this.saveMenu
    }, newProps, {
      prefixCls: this.getDropdownPrefixCls(),
      onMenuSelect: props.onMenuSelect,
      onMenuDeselect: props.onMenuDeselect,
      value: props.value,
      defaultActiveFirstOption: props.defaultActiveFirstOption,
      dropdownMenuStyle: props.dropdownMenuStyle
    }));
  },
  getDropdownTransitionName: function getDropdownTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = this.getDropdownPrefixCls() + '-' + props.animation;
    }
    return transitionName;
  },
  getDropdownPrefixCls: function getDropdownPrefixCls() {
    return this.props.prefixCls + '-dropdown';
  },
  saveMenu: function saveMenu(menu) {
    this.popupMenu = menu;
  },
  render: function render() {
    var _popupClassName;

    var _props2 = this.props,
        onPopupFocus = _props2.onPopupFocus,
        props = (0, _objectWithoutProperties3['default'])(_props2, ['onPopupFocus']);
    var multiple = props.multiple,
        visible = props.visible,
        inputValue = props.inputValue,
        dropdownAlign = props.dropdownAlign,
        disabled = props.disabled,
        showSearch = props.showSearch,
        dropdownClassName = props.dropdownClassName;

    var dropdownPrefixCls = this.getDropdownPrefixCls();
    var popupClassName = (_popupClassName = {}, (0, _defineProperty3['default'])(_popupClassName, dropdownClassName, !!dropdownClassName), (0, _defineProperty3['default'])(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), _popupClassName);
    var popupElement = this.getDropdownElement({
      menuItems: props.options,
      onPopupFocus: onPopupFocus,
      multiple: multiple,
      inputValue: inputValue,
      visible: visible
    });
    var hideAction = void 0;
    if (disabled) {
      hideAction = [];
    } else if ((0, _util.isSingleMode)(props) && !showSearch) {
      hideAction = ['click'];
    } else {
      hideAction = ['blur'];
    }
    return _react2['default'].createElement(
      _rcTrigger2['default'],
      (0, _extends3['default'])({}, props, {
        showAction: disabled ? [] : ['click'],
        hideAction: hideAction,
        ref: 'trigger',
        popupPlacement: 'bottomLeft',
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: (0, _classnames2['default'])(popupClassName),
        popupStyle: props.dropdownStyle
      }),
      props.children
    );
  }
});

SelectTrigger.displayName = 'SelectTrigger';

exports['default'] = SelectTrigger;
module.exports = exports['default'];