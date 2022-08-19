function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var styled = _interopDefault(require('styled-components'));
var ss = require('styled-system');
require('@fortawesome/fontawesome-svg-core/styles.css');
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

var _templateObject;
var Icon = styled(reactFontawesome.FontAwesomeIcon)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n"])), ss.compose(ss.color, ss.layout, ss.position, ss.space, ss.typography));

var _excluded = ["icon", "lib"];
fontawesomeSvgCore.config.autoAddCss = false;
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

exports.FontAwesomeIcon = FontAwesomeIcon;
//# sourceMappingURL=index.js.map
