function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = _interopDefault(require('react'));
var ss = require('styled-system');
var Link = _interopDefault(require('next/link'));
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons');
var freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

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

var breakpoints = {
  _xs: '374px',
  _s: '599px',
  _m: '767px',
  _l: '1023px',
  _xl: '1365px',
  xs: '375px',
  s: '600px',
  m: '768px',
  l: '1024px',
  xl: '1366px'
};

var _templateObject;
var NormalizeCss = styled.createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  :root {\n    --xs: ", ";\n    --s: ", ";\n    --m: ", ";\n    --l: ", ";\n    --xl: ", ";\n  }\n\n  :root {\n    /* prettier-ignore */\n    --secure-font: -apple-system, BlinkMacSystemFont, 'Segoe UI','Source Sans Pro', Oxygen, sans-serif;\n    --main-font: 'Source Sans Pro';\n    --body-font-family: var(--main-font), var(--secure-font);\n    --body-font-size: 16px;\n  }\n\n  * {\n    box-sizing: border-box;\n    outline: none;\n    outline: 0;\n  }\n  *:focus {\n    outline: none;\n    outline: 0;\n  }\n\n  html,\n  body {\n    font-family: var(--body-font-family);\n    font-size: var(--body-font-size);\n    height: 100%;\n    margin: 0 auto;\n    padding: 0;\n    position: relative;\n    width: 100%;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: var(--body-font-family);\n    margin: 0px;\n    padding: 1rem 0px;\n    position: relative;\n    white-space: pre-line;\n  }\n\n  a {\n    cursor: pointer;\n    text-decoration: none;\n    transition: all 0.2s ease, outline 0.000001s;\n  }\n  a:active,\n  a:hover {\n    text-decoration: none;\n  }\n  a:focus {\n    color: inherit;\n  }\n\n  img,\n  svg {\n    border: 0;\n    border: none;\n    display: inline-block;\n    outline: 0;\n    outline: none;\n    vertical-align: middle;\n    user-select: none;\n  }\n\n  p {\n    margin: 0px;\n    padding: 0.3125rem 0px;\n    white-space: pre-line;\n  }\n\n  hr {\n    border: none;\n    border-top: solid 1px;\n  }\n"])), breakpoints.xs, breakpoints.s, breakpoints.m, breakpoints.l, breakpoints.xl);

var _templateObject$1, _templateObject2;
var Box = styled__default.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  display: block;\n  margin: 0 auto;\n  padding: 0rem 0.625rem;\n  width: 100%;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return !props.fullWidth && styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      max-width: 85.375rem;\n    "])));
}, ss.compose(ss.layout, ss.position, ss.space));

var _excluded = ["children"];
var Box$1 = function Box$1(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, props, children);
};

var _templateObject$2, _templateObject2$1;
var Flex = styled__default.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.show && styled.css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n      outline: 2px dashed;\n    "])));
}, ss.compose(ss.flexbox, ss.grid, ss.layout, ss.space));

var _excluded$1 = ["children"];
var Flex$1 = function Flex$1(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement(Flex, props, children);
};

var _templateObject$3, _templateObject2$2;
var Grid = styled__default.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: grid;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.show && styled.css(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n      outline: 2px dashed;\n    "])));
}, ss.compose(ss.flexbox, ss.grid, ss.layout, ss.space));

var _excluded$2 = ["children"];
var Grid$1 = function Grid$1(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return /*#__PURE__*/React.createElement(Grid, props, children);
};

var _templateObject$4, _templateObject2$3, _templateObject3;
var Track = styled__default.div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  padding: 0.625rem;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.show && styled.css(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["\n      outline: 2px dashed;\n    "])));
}, function (props) {
  return props.inner && styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      padding: 0rem;\n    "])));
}, ss.compose(ss.background, ss.border, ss.color, ss.flexbox, ss.grid, ss.layout, ss.space, ss.typography));

var _excluded$3 = ["children"];
var Track$1 = function Track$1(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement(Track, props, children);
};

var _templateObject$5;
var _ = styled__default.div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), ss.compose(ss.background, ss.border, ss.color, ss.flexbox, ss.grid, ss.layout, ss.position, ss.shadow, ss.space, ss.typography));

var _excluded$4 = ["children"];
var _$1 = function _$1(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  return /*#__PURE__*/React.createElement(_, props, children);
};

var _templateObject$6, _templateObject2$4;
var Button = styled__default.a(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.disabled && styled.css(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteralLoose(["\n      cursor: not-allowed;\n      filter: grayscale(100%);\n      opacity: 0.5;\n      pointer-events: none;\n    "])));
}, ss.compose(ss.color, ss.layout, ss.position, ss.space, ss.typography));

var _excluded$5 = ["scroll"],
    _excluded2 = ["children", "label"];
var Button$1 = React.forwardRef(function (_ref, ref) {
  var _ref$scroll = _ref.scroll,
      scroll = _ref$scroll === void 0 ? true : _ref$scroll,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$5);

  return /*#__PURE__*/React.createElement(React.Fragment, null, (props.target || !props.href) && /*#__PURE__*/React.createElement(A, _extends({
    ref: ref,
    rel: props.target ? 'noreferrer noopener' : null
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

var _templateObject$7;
var Icon = styled__default(reactFontawesome.FontAwesomeIcon)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteralLoose(["\n  height: 1em;\n  ", "\n"])), ss.compose(ss.color, ss.layout, ss.position, ss.space, ss.typography));

var _excluded$6 = ["icon", "lib"];
fontawesomeSvgCore.library.add(freeBrandsSvgIcons.fab, freeRegularSvgIcons.far, freeSolidSvgIcons.fas);
var FontAwesomeIcon = function FontAwesomeIcon(_ref) {
  var icon = _ref.icon,
      _ref$lib = _ref.lib,
      lib = _ref$lib === void 0 ? 'fas' : _ref$lib,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$6);

  return /*#__PURE__*/React.createElement(Icon, _extends({
    icon: [lib, icon]
  }, props));
};

exports.Box = Box$1;
exports.Button = Button$1;
exports.Flex = Flex$1;
exports.FontAwesomeIcon = FontAwesomeIcon;
exports.Grid = Grid$1;
exports.NormalizeCss = NormalizeCss;
exports.Track = Track$1;
exports._ = _$1;
//# sourceMappingURL=index.js.map
