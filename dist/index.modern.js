import styled, { createGlobalStyle, css } from 'styled-components';
import React from 'react';
import { compose, layout, position, space, flexbox, grid, background, border, color, typography, shadow } from 'styled-system';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as FontAwesomeIcon$1 } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FormProvider, useFormContext, Controller } from 'react-hook-form';
export { Controller, FormProvider, useController, useFieldArray, useForm, useFormContext, useFormState, useWatch } from 'react-hook-form';
import { useId } from 'react-id-generator';
import Cleave from 'cleave.js/react';

const breakpoints = {
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

let _ = t => t,
  _t;
const NormalizeCss = createGlobalStyle(_t || (_t = _`
  :root {
    --xs: ${0};
    --s: ${0};
    --m: ${0};
    --l: ${0};
    --xl: ${0};
  }

  :root {
    /* prettier-ignore */
    --secure-font: -apple-system, BlinkMacSystemFont, 'Segoe UI','Source Sans Pro', Oxygen, sans-serif;
    --main-font: 'Source Sans Pro';
    --body-font-family: var(--main-font), var(--secure-font);
    --body-font-size: 16px;
  }

  * {
    box-sizing: border-box;
    outline: none;
    outline: 0;
  }
  *:focus {
    outline: none;
    outline: 0;
  }

  html,
  body {
    font-family: var(--body-font-family);
    font-size: var(--body-font-size);
    height: 100%;
    margin: 0 auto;
    padding: 0;
    position: relative;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--body-font-family);
    margin: 0px;
    padding: 1rem 0px;
    position: relative;
    white-space: pre-line;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease, outline 0.000001s;
  }
  a:active,
  a:hover {
    text-decoration: none;
  }
  a:focus {
    color: inherit;
  }

  img,
  svg {
    border: 0;
    border: none;
    display: inline-block;
    outline: 0;
    outline: none;
    vertical-align: middle;
    user-select: none;
  }

  p {
    margin: 0px;
    padding: 0.3125rem 0px;
    white-space: pre-line;
  }

  hr {
    border: none;
    border-top: solid 1px;
  }
`), breakpoints.xs, breakpoints.s, breakpoints.m, breakpoints.l, breakpoints.xl);

let _$1 = t => t,
  _t$1,
  _t2;
const Box = styled.div(_t$1 || (_t$1 = _$1`
  display: block;
  margin: 0 auto;
  padding: 0rem 0.625rem;
  width: 100%;

  ${0}

  ${0}
`), props => !props.fullWidth && css(_t2 || (_t2 = _$1`
      max-width: 85.375rem;
    `)), compose(layout, position, space));

const Box$1 = ({
  children,
  ...props
}) => /*#__PURE__*/React.createElement(Box, props, children);

let _$2 = t => t,
  _t$2,
  _t2$1;
const Flex = styled.div(_t$2 || (_t$2 = _$2`
  align-items: center;
  display: flex;

  ${0}

  ${0}
`), props => props.show && css(_t2$1 || (_t2$1 = _$2`
      outline: 2px dashed;
    `)), compose(flexbox, grid, layout, space));

const Flex$1 = ({
  children,
  ...props
}) => /*#__PURE__*/React.createElement(Flex, props, children);

let _$3 = t => t,
  _t$3,
  _t2$2;
const Grid = styled.div(_t$3 || (_t$3 = _$3`
  align-items: center;
  display: grid;

  ${0}

  ${0}
`), props => props.show && css(_t2$2 || (_t2$2 = _$3`
      outline: 2px dashed;
    `)), compose(flexbox, grid, layout, space));

const Grid$1 = ({
  children,
  ...props
}) => /*#__PURE__*/React.createElement(Grid, props, children);

let _$4 = t => t,
  _t$4,
  _t2$3,
  _t3;
const Track = styled.div(_t$4 || (_t$4 = _$4`
  padding: 0.625rem;

  ${0}

  ${0}

  ${0}
`), props => props.show && css(_t2$3 || (_t2$3 = _$4`
      outline: 2px dashed;
    `)), props => props.inner && css(_t3 || (_t3 = _$4`
      padding: 0rem;
    `)), compose(background, border, color, flexbox, grid, layout, space, position, typography));

const Track$1 = ({
  children,
  ...props
}) => /*#__PURE__*/React.createElement(Track, props, children);

let _2 = t => t,
  _t$5;
const _$5 = styled.div(_t$5 || (_t$5 = _2`
  ${0}
`), compose(background, border, color, flexbox, grid, layout, position, shadow, space, typography));

const _$6 = ({
  children,
  ...props
}) => /*#__PURE__*/React.createElement(_$5, props, children);

let _$7 = t => t,
  _t$6;
const Icon = styled(FontAwesomeIcon$1)(_t$6 || (_t$6 = _$7`
  height: 1em;
  ${0}
`), compose(color, layout, position, space, typography));

library.add(fab, far, fas);

const FontAwesomeIcon = ({
  icon,
  lib: _lib = 'fas',
  ...props
}) => {
  return /*#__PURE__*/React.createElement(Icon, Object.assign({
    icon: [_lib, icon]
  }, props));
};

const Form = ({
  methods,
  children,
  autoSubmit,
  onSubmit,
  onChange,
  innerRef,
  ...props
}) => {
  const doSubmit = methods.handleSubmit((data, e) => onSubmit({
    data: data,
    methods: methods,
    e: e
  }));
  return /*#__PURE__*/React.createElement(FormProvider, methods, /*#__PURE__*/React.createElement("form", Object.assign({
    ref: e => innerRef ? innerRef.current = e : null,
    onSubmit: onSubmit && doSubmit,
    onChange: e => {
      onChange && onChange({
        e: e,
        methods: methods
      });
      autoSubmit && onSubmit && doSubmit();
    }
  }, props), children));
};

const Error = ({
  name,
  validations,
  ...props
}) => {
  var _errors$name, _errors$name2;
  const {
    formState: {
      errors
    }
  } = useFormContext();
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.type) && /*#__PURE__*/React.createElement("span", Object.assign({
    role: "alert"
  }, props), validations[(_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.type]));
};

const GlobalError = ({
  message,
  ...props
}) => {
  const {
    formState: {
      errors
    }
  } = useFormContext();
  return /*#__PURE__*/React.createElement(React.Fragment, null, Object.keys(errors).length > 0 && message && /*#__PURE__*/React.createElement("span", Object.assign({
    role: "alert"
  }, props), message));
};

const Label = ({
  children,
  id,
  name,
  content,
  innerRef,
  ...props
}) => {
  const {
    formState: {
      errors
    }
  } = useFormContext();
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("label", Object.assign({
    ref: e => innerRef ? innerRef.current = e : null,
    htmlFor: id ? `${name}:${id}` : `${name}:${useId()}`,
    "aria-invalid": errors[name] && 'true'
  }, props), children ?? content));
};

const Input = ({
  id,
  name,
  value,
  validations,
  innerRef,
  ...props
}) => {
  const {
    register,
    formState: {
      errors
    }
  } = useFormContext();
  const {
    ref,
    onChange,
    onBlur,
    ...rest
  } = register(name, {
    ...validations
  });
  const defaultID = useId();
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("input", Object.assign({
    id: id ? `${name}:${id}` : `${name}:${defaultID}`,
    name: name,
    defaultValue: value,
    "aria-invalid": errors[name] && 'true',
    ref: e => {
      ref(e);
      if (innerRef) innerRef.current = e;
    }
  }, rest, props, {
    onChange: e => {
      onChange(e);
      props.onChange && props.onChange(e);
    },
    onBlur: e => {
      onBlur(e);
      props.onBlur && props.onBlur(e);
    }
  })));
};

const InputFormat = ({
  id,
  name,
  validations,
  format,
  rawValue,
  innerRef,
  ...props
}) => {
  const {
    control,
    setValue,
    getValues,
    formState: {
      errors
    }
  } = useFormContext();
  const value = getValues(name);

  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement(Controller, {
    control: control,
    name: name,
    rules: {
      ...validations
    },
    render: ({
      field: {
        onChange,
        onBlur
      }
    }) => {
      return /*#__PURE__*/React.createElement(Cleave, Object.assign({
        ref: e => innerRef ? innerRef.current = e : null,
        id: id ? `${name}:${id}` : `${name}:${useId()}`,
        name: name,
        "aria-invalid": errors[name] && 'true',
        options: {
          ...format
        },
        value: value ? value : ''
      }, props, {
        onInit: ({
          getRawValue,
          lastInputValue
        }) => {
          setValue(name, rawValue ? getRawValue() : lastInputValue);
        },
        onChange: e => {
          onChange(e);
          setValue(name, rawValue ? e.target.rawValue : e.target.value);
          props.onChange && props.onChange(e);
        },
        onBlur: e => {
          onBlur(e);
          setValue(name, rawValue ? e.target.rawValue : e.target.value);
          props.onBlur && props.onBlur(e);
        }
      }));
    }
  }));
};

const Select = ({
  children,
  id,
  name,
  value: _value = '',
  validations,
  innerRef,
  ...props
}) => {
  const {
    register,
    formState: {
      errors
    }
  } = useFormContext();
  const {
    ref,
    onChange,
    onBlur,
    ...rest
  } = register(name, {
    ...validations
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("select", Object.assign({
    id: id ? `${name}:${id}` : `${name}:${useId()}`,
    name: name,
    defaultValue: _value,
    "aria-invalid": errors[name] && 'true',
    ref: e => {
      ref(e);
      if (innerRef) innerRef.current = e;
    }
  }, rest, props, {
    onChange: e => {
      onChange(e);
      props.onChange && props.onChange(e);
    },
    onBlur: e => {
      onBlur(e);
      props.onBlur && props.onBlur(e);
    }
  }), props.placeholder && /*#__PURE__*/React.createElement("option", {
    disabled: validations === null || validations === void 0 ? void 0 : validations.required,
    value: ""
  }, props.placeholder), children));
};

const Textarea = ({
  id,
  name,
  value,
  validations,
  innerRef,
  ...props
}) => {
  const {
    register,
    formState: {
      errors
    }
  } = useFormContext();
  const {
    ref,
    onChange,
    onBlur,
    ...rest
  } = register(name, {
    ...validations
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, name && /*#__PURE__*/React.createElement("textarea", Object.assign({
    id: id ? `${name}:${id}` : `${name}:${useId()}`,
    name: name,
    defaultValue: value,
    "aria-invalid": errors[name] && 'true',
    ref: e => {
      ref(e);
      if (innerRef) innerRef.current = e;
    }
  }, rest, props, {
    onChange: e => {
      onChange(e);
      props.onChange && props.onChange(e);
    },
    onBlur: e => {
      onBlur(e);
      props.onBlur && props.onBlur(e);
    }
  })));
};

export { Box$1 as Box, Error, Flex$1 as Flex, FontAwesomeIcon, Form, GlobalError, Grid$1 as Grid, Input, InputFormat, Label, NormalizeCss, Select, Textarea, Track$1 as Track, _$6 as _, breakpoints };
//# sourceMappingURL=index.modern.js.map
