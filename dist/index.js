function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var ss = require('styled-system');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons');
var freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var Link = _interopDefault(require('next/link'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var Icon = styled__default(reactFontawesome.FontAwesomeIcon)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  height: 1em;\n  ", "\n"])), ss.compose(ss.color, ss.layout, ss.position, ss.space, ss.typography));

var _excluded = ["icon", "lib"];
fontawesomeSvgCore.library.add(freeBrandsSvgIcons.fab, freeRegularSvgIcons.far, freeSolidSvgIcons.fas);
var FontAwesomeIcon = function FontAwesomeIcon(_ref) {
  var icon = _ref.icon,
      _ref$lib = _ref.lib,
      lib = _ref$lib === void 0 ? 'fas' : _ref$lib,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Icon, _extends({
    icon: [lib, icon]
  }, props));
};

var _templateObject$1, _templateObject2;
var Button = styled__default.a(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.disabled && styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      cursor: not-allowed;\n      filter: grayscale(100%);\n      opacity: 0.5;\n      pointer-events: none;\n    "])));
}, ss.compose(ss.color, ss.layout, ss.position, ss.space, ss.typography));

var _excluded$1 = ["scroll"],
    _excluded2 = ["children", "label"];
var Button$1 = React.forwardRef(function (_ref, ref) {
  var _ref$scroll = _ref.scroll,
      scroll = _ref$scroll === void 0 ? true : _ref$scroll,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement(React.Fragment, null, (props.target || !props.href) && /*#__PURE__*/React.createElement(A, _extends({
    ref: ref
  }, props)) || /*#__PURE__*/React.createElement(Link, {
    href: props.href,
    passHref: true,
    scroll: scroll
  }, /*#__PURE__*/React.createElement(A, _extends({
    ref: ref
  }, props))));
});
Button$1.displayName = 'Button';
var A = React.forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
      label = _ref2.label,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(Button, _extends({
    ref: ref,
    type: props.as === 'button' ? 'submit' : null
  }, props), children && children || /*#__PURE__*/React.createElement("span", null, label));
});
A.displayName = 'A';

exports.Button = Button$1;
exports.FontAwesomeIcon = FontAwesomeIcon;
//# sourceMappingURL=index.js.map
