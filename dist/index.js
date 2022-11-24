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
var reactHookForm = require('react-hook-form');
var reactIdGenerator = require('react-id-generator');
var Cleave = _interopDefault(require('cleave.js/react'));

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
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
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

var _excluded$5 = ["children", "label"],
  _excluded2 = ["children", "label", "scroll"];

var Button = function Button(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/React.createElement(React.Fragment, null, (props.target || !props.href) && /*#__PURE__*/React.createElement(Anchor, props) || /*#__PURE__*/React.createElement(SPALink, props));
};
var Anchor = function Anchor(_ref2) {
  var children = _ref2.children,
    label = _ref2.label,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded$5);
  return /*#__PURE__*/React.createElement("a", _extends({
    rel: props.target ? 'noreferrer noopener' : null
  }, props), children != null ? children : /*#__PURE__*/React.createElement("span", null, label));
};
var SPALink = function SPALink(_ref3) {
  var children = _ref3.children,
    label = _ref3.label,
    _ref3$scroll = _ref3.scroll,
    scroll = _ref3$scroll === void 0 ? true : _ref3$scroll,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded2);
  return /*#__PURE__*/React.createElement(Link, _extends({
    scroll: scroll
  }, props), children != null ? children : /*#__PURE__*/React.createElement("span", null, label));
};

var _templateObject$6;
var Icon = styled__default(reactFontawesome.FontAwesomeIcon)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  height: 1em;\n  ", "\n"])), ss.compose(ss.color, ss.layout, ss.position, ss.space, ss.typography));

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

var _excluded$7 = ["children", "onSubmit"];

var Form = function Form(_ref) {
  var children = _ref.children,
    onSubmit = _ref.onSubmit,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  var methods = reactHookForm.useForm();
  return /*#__PURE__*/React.createElement(reactHookForm.FormProvider, methods, /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: onSubmit && methods.handleSubmit(onSubmit)
  }, props), children));
};

var _excluded$8 = ["name", "validations"],
  _excluded2$1 = ["message"];

var Error = function Error(_ref) {
  var _errors$name, _errors$name2, _errors$name3, _errors$name4, _errors$name5, _errors$name6, _errors$name7, _errors$name8;
  var name = _ref.name,
    validations = _ref.validations,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  var _useFormContext = reactHookForm.useFormContext(),
    errors = _useFormContext.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("span", _extends({
    role: "alert"
  }, props), ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.type) === 'required' && validations.required, ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.type) === 'min' && validations.min, ((_errors$name3 = errors[name]) === null || _errors$name3 === void 0 ? void 0 : _errors$name3.type) === 'max' && validations.max, ((_errors$name4 = errors[name]) === null || _errors$name4 === void 0 ? void 0 : _errors$name4.type) === 'minLength' && validations.minLength, ((_errors$name5 = errors[name]) === null || _errors$name5 === void 0 ? void 0 : _errors$name5.type) === 'maxLength' && validations.maxLength, ((_errors$name6 = errors[name]) === null || _errors$name6 === void 0 ? void 0 : _errors$name6.type) === 'pattern' && validations.pattern, ((_errors$name7 = errors[name]) === null || _errors$name7 === void 0 ? void 0 : _errors$name7.type) === 'validate' && validations.validate, ((_errors$name8 = errors[name]) === null || _errors$name8 === void 0 ? void 0 : _errors$name8.type) === 'custom' && validations.custom));
};

var GlobalError = function GlobalError(_ref2) {
  var message = _ref2.message,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$1);
  var _useFormContext2 = reactHookForm.useFormContext(),
    errors = _useFormContext2.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, Object.keys(errors).length > 0 && message && /*#__PURE__*/React.createElement("span", _extends({
    role: "alert"
  }, props), message));
};

var _excluded$9 = ["children", "id", "name", "content"];

var Label = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    id = _ref.id,
    name = _ref.name,
    content = _ref.content,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  var _useFormContext = reactHookForm.useFormContext(),
    errors = _useFormContext.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("label", _extends({
    ref: ref,
    htmlFor: id ? name + ":" + id : name + ":" + reactIdGenerator.useId(),
    "aria-invalid": errors[name] && 'true'
  }, props), children != null ? children : content));
});

var _excluded$a = ["id", "name", "value", "validations"];

var Input = React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    validations = _ref.validations,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  var _useFormContext = reactHookForm.useFormContext(),
    register = _useFormContext.register,
    errors = _useFormContext.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: id ? name + ":" + id : name + ":" + reactIdGenerator.useId(),
    name: name,
    defaultValue: value,
    "aria-invalid": errors[name] && 'true'
  }, register(name, _extends({}, validations)), props)));
});

var _excluded$b = ["id", "name", "value", "validations", "format"];

var InputFormat = React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    validations = _ref.validations,
    format = _ref.format,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  var _useFormContext = reactHookForm.useFormContext(),
    control = _useFormContext.control,
    setValue = _useFormContext.setValue,
    errors = _useFormContext.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement(reactHookForm.Controller, {
    control: control,
    name: name,
    rules: _extends({}, validations),
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
        onChange = _ref2$field.onChange,
        onBlur = _ref2$field.onBlur;
      return /*#__PURE__*/React.createElement(Cleave, _extends({
        ref: ref,
        id: id ? name + ":" + id : name + ":" + reactIdGenerator.useId(),
        name: name,
        "aria-invalid": errors[name] && 'true'
        ,
        onChange: onChange,
        onBlur: onBlur,
        onInit: function onInit(_ref3) {
          var lastInputValue = _ref3.lastInputValue;
          return setValue(name, lastInputValue);
        },
        options: _extends({}, format),
        value: value
      }, props));
    }
  }));
});

var _excluded$c = ["children", "id", "name", "value", "validations"];

var Select = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    id = _ref.id,
    name = _ref.name,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    validations = _ref.validations,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  var _useFormContext = reactHookForm.useFormContext(),
    register = _useFormContext.register,
    errors = _useFormContext.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("select", _extends({
    ref: ref,
    id: id ? name + ":" + id : name + ":" + reactIdGenerator.useId(),
    name: name,
    defaultValue: value,
    "aria-invalid": errors[name] && 'true'
  }, register(name, _extends({}, validations)), props), props.placeholder && /*#__PURE__*/React.createElement("option", {
    disabled: validations === null || validations === void 0 ? void 0 : validations.required,
    value: ""
  }, props.placeholder), children));
});

var _excluded$d = ["id", "name", "value", "validations"];

var Textarea = React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    validations = _ref.validations,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  var _useFormContext = reactHookForm.useFormContext(),
    register = _useFormContext.register,
    errors = _useFormContext.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("textarea", _extends({
    ref: ref,
    id: id ? name + ":" + id : name + ":" + reactIdGenerator.useId(),
    name: name,
    defaultValue: value,
    "aria-invalid": errors[name] && 'true'
  }, register(name, _extends({}, validations)), props)));
});

Object.defineProperty(exports, 'Controller', {
  enumerable: true,
  get: function () {
    return reactHookForm.Controller;
  }
});
Object.defineProperty(exports, 'FormProvider', {
  enumerable: true,
  get: function () {
    return reactHookForm.FormProvider;
  }
});
Object.defineProperty(exports, 'useController', {
  enumerable: true,
  get: function () {
    return reactHookForm.useController;
  }
});
Object.defineProperty(exports, 'useFieldArray', {
  enumerable: true,
  get: function () {
    return reactHookForm.useFieldArray;
  }
});
Object.defineProperty(exports, 'useForm', {
  enumerable: true,
  get: function () {
    return reactHookForm.useForm;
  }
});
Object.defineProperty(exports, 'useFormContext', {
  enumerable: true,
  get: function () {
    return reactHookForm.useFormContext;
  }
});
Object.defineProperty(exports, 'useFormState', {
  enumerable: true,
  get: function () {
    return reactHookForm.useFormState;
  }
});
Object.defineProperty(exports, 'useWatch', {
  enumerable: true,
  get: function () {
    return reactHookForm.useWatch;
  }
});
exports.Box = Box$1;
exports.Button = Button;
exports.Error = Error;
exports.Flex = Flex$1;
exports.FontAwesomeIcon = FontAwesomeIcon;
exports.Form = Form;
exports.GlobalError = GlobalError;
exports.Grid = Grid$1;
exports.Input = Input;
exports.InputFormat = InputFormat;
exports.Label = Label;
exports.NormalizeCss = NormalizeCss;
exports.Select = Select;
exports.Textarea = Textarea;
exports.Track = Track$1;
exports._ = _$1;
exports.breakpoints = breakpoints;
//# sourceMappingURL=index.js.map
