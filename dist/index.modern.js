import styled, { createGlobalStyle, css } from 'styled-components';
import React from 'react';
import { compose, layout, position, space, flexbox, grid, background, border, color, typography, shadow } from 'styled-system';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as FontAwesomeIcon$1 } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far as far$1 } from '@fortawesome/pro-regular-svg-icons';
import { fas as fas$1 } from '@fortawesome/pro-solid-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';
import { fasl } from '@fortawesome/sharp-light-svg-icons';
import { fasr } from '@fortawesome/sharp-regular-svg-icons';
import { fass } from '@fortawesome/sharp-solid-svg-icons';
import { FormProvider, useFormContext, Controller } from 'react-hook-form';
export { Controller, FormProvider, useController, useFieldArray, useForm, useFormContext, useFormState, useWatch } from 'react-hook-form';
import { useId } from 'react-id-generator';
import Cleave from 'cleave.js/react';

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
var NormalizeCss = createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  :root {\n    --xs: ", ";\n    --s: ", ";\n    --m: ", ";\n    --l: ", ";\n    --xl: ", ";\n  }\n\n  :root {\n    /* prettier-ignore */\n    --secure-font: -apple-system, BlinkMacSystemFont, 'Segoe UI','Source Sans Pro', Oxygen, sans-serif;\n    --main-font: 'Source Sans Pro';\n    --body-font-family: var(--main-font), var(--secure-font);\n    --body-font-size: 16px;\n  }\n\n  * {\n    box-sizing: border-box;\n    outline: none;\n    outline: 0;\n  }\n  *:focus {\n    outline: none;\n    outline: 0;\n  }\n\n  html,\n  body {\n    font-family: var(--body-font-family);\n    font-size: var(--body-font-size);\n    height: 100%;\n    margin: 0 auto;\n    padding: 0;\n    position: relative;\n    width: 100%;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: var(--body-font-family);\n    margin: 0px;\n    padding: 1rem 0px;\n    position: relative;\n    white-space: pre-line;\n  }\n\n  a {\n    cursor: pointer;\n    text-decoration: none;\n    transition: all 0.2s ease, outline 0.000001s;\n  }\n  a:active,\n  a:hover {\n    text-decoration: none;\n  }\n  a:focus {\n    color: inherit;\n  }\n\n  img,\n  svg {\n    border: 0;\n    border: none;\n    display: inline-block;\n    outline: 0;\n    outline: none;\n    vertical-align: middle;\n    user-select: none;\n  }\n\n  p {\n    margin: 0px;\n    padding: 0.3125rem 0px;\n    white-space: pre-line;\n  }\n\n  hr {\n    border: none;\n    border-top: solid 1px;\n  }\n"])), breakpoints.xs, breakpoints.s, breakpoints.m, breakpoints.l, breakpoints.xl);

var _templateObject$1, _templateObject2;
var Box = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  display: block;\n  margin: 0 auto;\n  padding: 0rem 0.625rem;\n  width: 100%;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return !props.fullWidth && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      max-width: 85.375rem;\n    "])));
}, compose(layout, position, space));

var _excluded = ["children", "innerRef"];
var Box$1 = function Box$1(_ref) {
  var children = _ref.children,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Box, _extends({}, props, {
    ref: innerRef
  }), children);
};

var _templateObject$2, _templateObject2$1;
var Flex = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.show && css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n      outline: 2px dashed;\n    "])));
}, compose(flexbox, grid, layout, space));

var _excluded$1 = ["children", "innerRef"];
var Flex$1 = function Flex$1(_ref) {
  var children = _ref.children,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return /*#__PURE__*/React.createElement(Flex, _extends({}, props, {
    ref: innerRef
  }), children);
};

var _templateObject$3, _templateObject2$2;
var Grid = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: grid;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.show && css(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n      outline: 2px dashed;\n    "])));
}, compose(flexbox, grid, layout, space));

var _excluded$2 = ["children", "innerRef"];
var Grid$1 = function Grid$1(_ref) {
  var children = _ref.children,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  return /*#__PURE__*/React.createElement(Grid, _extends({}, props, {
    ref: innerRef
  }), children);
};

var _templateObject$4, _templateObject2$3, _templateObject3;
var Track = styled.div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  padding: 0.625rem;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.show && css(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["\n      outline: 2px dashed;\n    "])));
}, function (props) {
  return props.inner && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      padding: 0rem;\n    "])));
}, compose(background, border, color, flexbox, grid, layout, space, position, typography));

var _excluded$3 = ["children", "innerRef"];
var Track$1 = function Track$1(_ref) {
  var children = _ref.children,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  return /*#__PURE__*/React.createElement(Track, _extends({}, props, {
    ref: innerRef
  }), children);
};

var _templateObject$5;
var _ = styled.div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), compose(background, border, color, flexbox, grid, layout, position, shadow, space, typography));

var _excluded$4 = ["children", "innerRef"];
var _$1 = function _$1(_ref) {
  var children = _ref.children,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  return /*#__PURE__*/React.createElement(_, _extends({}, props, {
    ref: innerRef
  }), children);
};

var _templateObject$6;
var Icon = styled(FontAwesomeIcon$1)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  height: 1em;\n  ", "\n"])), compose(color, layout, position, space, typography));

var _excluded$5 = ["icon", "lib", "innerRef"];
library.add(fab, far, fas);
var FontAwesomeIcon = function FontAwesomeIcon(_ref) {
  var icon = _ref.icon,
    _ref$lib = _ref.lib,
    lib = _ref$lib === void 0 ? 'fas' : _ref$lib,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  return /*#__PURE__*/React.createElement(Icon, _extends({
    icon: [lib, icon]
  }, props, {
    ref: innerRef
  }));
};

var _templateObject$7;
var Icon$1 = styled(FontAwesomeIcon$1)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteralLoose(["\n  height: 1em;\n  ", "\n"])), compose(color, layout, position, space, typography));

var _excluded$6 = ["icon", "lib", "innerRef"];
library.add(fab, fad, fal, far$1, fas$1, fasl, fasr, fass, fat);
var FontAwesomeIconPro = function FontAwesomeIconPro(_ref) {
  var icon = _ref.icon,
    _ref$lib = _ref.lib,
    lib = _ref$lib === void 0 ? 'fas' : _ref$lib,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    icon: [lib, icon]
  }, props, {
    ref: innerRef
  }));
};

var _excluded$7 = ["methods", "children", "autoSubmit", "onSubmit", "onChange", "innerRef"];
var Form = function Form(_ref) {
  var methods = _ref.methods,
    children = _ref.children,
    autoSubmit = _ref.autoSubmit,
    onSubmit = _ref.onSubmit,
    _onChange = _ref.onChange,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  var doSubmit = methods.handleSubmit(function (data, e) {
    return onSubmit({
      data: data,
      methods: methods,
      e: e
    });
  });
  return /*#__PURE__*/React.createElement(FormProvider, methods, /*#__PURE__*/React.createElement("form", _extends({
    ref: function ref(e) {
      return innerRef ? innerRef.current = e : null;
    },
    onSubmit: onSubmit && doSubmit,
    onChange: function onChange(e) {
      _onChange && _onChange({
        e: e,
        methods: methods
      });
      autoSubmit && onSubmit && doSubmit();
    }
  }, props), children));
};

var _excluded$8 = ["name", "validations"],
  _excluded2 = ["message"];
var Error = function Error(_ref) {
  var _errors$name, _errors$name2, _errors$name3;
  var name = _ref.name,
    validations = _ref.validations,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  var _useFormContext = useFormContext(),
    errors = _useFormContext.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.type) && validations[(_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.type] && /*#__PURE__*/React.createElement("span", _extends({
    role: "alert"
  }, props), validations[(_errors$name3 = errors[name]) === null || _errors$name3 === void 0 ? void 0 : _errors$name3.type]));
};
var GlobalError = function GlobalError(_ref2) {
  var message = _ref2.message,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var _useFormContext2 = useFormContext(),
    errors = _useFormContext2.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, Object.keys(errors).length > 0 && message && /*#__PURE__*/React.createElement("span", _extends({
    role: "alert"
  }, props), message));
};

var _excluded$9 = ["children", "id", "name", "content", "innerRef"];
var Label = function Label(_ref) {
  var children = _ref.children,
    id = _ref.id,
    name = _ref.name,
    content = _ref.content,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  var _useFormContext = useFormContext(),
    errors = _useFormContext.formState.errors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("label", _extends({
    ref: function ref(e) {
      return innerRef ? innerRef.current = e : null;
    },
    htmlFor: id ? name + ":" + id : name + ":" + useId(),
    "aria-invalid": errors[name] && 'true'
  }, props), children != null ? children : content));
};

var _excluded$a = ["id", "name", "value", "validations", "innerRef"],
  _excluded2$1 = ["ref", "onChange", "onBlur"];
var Input = function Input(_ref) {
  var id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    validations = _ref.validations,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  var _useFormContext = useFormContext(),
    register = _useFormContext.register,
    errors = _useFormContext.formState.errors;
  var _register = register(name, _extends({}, validations)),
    _ref2 = _register.ref,
    _onChange = _register.onChange,
    _onBlur = _register.onBlur,
    rest = _objectWithoutPropertiesLoose(_register, _excluded2$1);
  var defaultID = useId();
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("input", _extends({
    id: id ? name + ":" + id : name + ":" + defaultID,
    name: name,
    defaultValue: value,
    "aria-invalid": errors[name] && 'true',
    ref: function ref(e) {
      _ref2(e);
      if (innerRef) innerRef.current = e;
    }
  }, rest, props, {
    onChange: function onChange(e) {
      _onChange(e);
      props.onChange && props.onChange(e);
    },
    onBlur: function onBlur(e) {
      _onBlur(e);
      props.onBlur && props.onBlur(e);
    }
  })));
};

var _excluded$b = ["id", "name", "validations", "format", "rawValue", "innerRef"];
var InputFormat = function InputFormat(_ref) {
  var id = _ref.id,
    name = _ref.name,
    validations = _ref.validations,
    format = _ref.format,
    rawValue = _ref.rawValue,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  var _useFormContext = useFormContext(),
    control = _useFormContext.control,
    setValue = _useFormContext.setValue,
    getValues = _useFormContext.getValues,
    errors = _useFormContext.formState.errors;
  var value = getValues(name);
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement(Controller, {
    control: control,
    name: name,
    rules: _extends({}, validations),
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
        _onChange = _ref2$field.onChange,
        _onBlur = _ref2$field.onBlur;
      return /*#__PURE__*/React.createElement(Cleave, _extends({
        ref: function ref(e) {
          return innerRef ? innerRef.current = e : null;
        },
        id: id ? name + ":" + id : name + ":" + useId(),
        name: name,
        "aria-invalid": errors[name] && 'true',
        options: _extends({}, format),
        value: value ? value : ''
      }, props, {
        onInit: function onInit(_ref3) {
          var getRawValue = _ref3.getRawValue,
            lastInputValue = _ref3.lastInputValue;
          setValue(name, rawValue ? getRawValue() : lastInputValue);
        },
        onChange: function onChange(e) {
          _onChange(e);
          setValue(name, rawValue ? e.target.rawValue : e.target.value);
          props.onChange && props.onChange(e);
        },
        onBlur: function onBlur(e) {
          _onBlur(e);
          setValue(name, rawValue ? e.target.rawValue : e.target.value);
          props.onBlur && props.onBlur(e);
        }
      }));
    }
  }));
};

var _excluded$c = ["children", "id", "name", "value", "validations", "innerRef"],
  _excluded2$2 = ["ref", "onChange", "onBlur"];
var Select = function Select(_ref) {
  var children = _ref.children,
    id = _ref.id,
    name = _ref.name,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    validations = _ref.validations,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  var _useFormContext = useFormContext(),
    register = _useFormContext.register,
    errors = _useFormContext.formState.errors;
  var _register = register(name, _extends({}, validations)),
    _ref2 = _register.ref,
    _onChange = _register.onChange,
    _onBlur = _register.onBlur,
    rest = _objectWithoutPropertiesLoose(_register, _excluded2$2);
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("select", _extends({
    id: id ? name + ":" + id : name + ":" + useId(),
    name: name,
    defaultValue: value,
    "aria-invalid": errors[name] && 'true',
    ref: function ref(e) {
      _ref2(e);
      if (innerRef) innerRef.current = e;
    }
  }, rest, props, {
    onChange: function onChange(e) {
      _onChange(e);
      props.onChange && props.onChange(e);
    },
    onBlur: function onBlur(e) {
      _onBlur(e);
      props.onBlur && props.onBlur(e);
    }
  }), props.placeholder && /*#__PURE__*/React.createElement("option", {
    disabled: validations === null || validations === void 0 ? void 0 : validations.required,
    value: ""
  }, props.placeholder), children));
};

var _excluded$d = ["id", "name", "value", "validations", "innerRef"],
  _excluded2$3 = ["ref", "onChange", "onBlur"];
var Textarea = function Textarea(_ref) {
  var id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    validations = _ref.validations,
    innerRef = _ref.innerRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  var _useFormContext = useFormContext(),
    register = _useFormContext.register,
    errors = _useFormContext.formState.errors;
  var _register = register(name, _extends({}, validations)),
    _ref2 = _register.ref,
    _onChange = _register.onChange,
    _onBlur = _register.onBlur,
    rest = _objectWithoutPropertiesLoose(_register, _excluded2$3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("textarea", _extends({
    id: id ? name + ":" + id : name + ":" + useId(),
    name: name,
    defaultValue: value,
    "aria-invalid": errors[name] && 'true',
    ref: function ref(e) {
      _ref2(e);
      if (innerRef) innerRef.current = e;
    }
  }, rest, props, {
    onChange: function onChange(e) {
      _onChange(e);
      props.onChange && props.onChange(e);
    },
    onBlur: function onBlur(e) {
      _onBlur(e);
      props.onBlur && props.onBlur(e);
    }
  })));
};

export { Box$1 as Box, Error, Flex$1 as Flex, FontAwesomeIcon, FontAwesomeIconPro, Form, GlobalError, Grid$1 as Grid, Input, InputFormat, Label, NormalizeCss, Select, Textarea, Track$1 as Track, _$1 as _, breakpoints };
//# sourceMappingURL=index.modern.js.map
