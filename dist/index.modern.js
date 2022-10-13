import styled, { createGlobalStyle, css } from 'styled-components';
import React from 'react';
import { compose, layout, position, space, flexbox, grid, background, border, color, typography, shadow } from 'styled-system';
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as FontAwesomeIcon$1 } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { useId } from 'react-id-generator';

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
    `)), compose(background, border, color, flexbox, grid, layout, space, typography));

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
  _t$6,
  _t2$4;
const Button = styled.a(_t$6 || (_t$6 = _$7`
  color: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  ${0}

  ${0}
`), props => props.disabled && css(_t2$4 || (_t2$4 = _$7`
      cursor: not-allowed;
      filter: grayscale(100%);
      opacity: 0.5;
      pointer-events: none;
    `)), compose(color, layout, position, space, typography));

const Button$1 = React.forwardRef(({
  scroll: _scroll = true,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, (props.target || !props.href) && /*#__PURE__*/React.createElement(A, Object.assign({
    ref: ref,
    rel: props.target ? 'noreferrer noopener' : null
  }, props)) || /*#__PURE__*/React.createElement(Link, {
    href: props.href,
    passHref: true,
    scroll: _scroll
  }, /*#__PURE__*/React.createElement(A, Object.assign({
    ref: ref
  }, props))));
});
Button$1.displayName = 'Button';
const A = React.forwardRef(({
  children,
  label,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement(Button, Object.assign({
    ref: ref,
    type: props.as === 'button' ? 'submit' : null
  }, props), children && children || /*#__PURE__*/React.createElement("span", null, label));
});
A.displayName = 'A';

let _$8 = t => t,
  _t$7;
const Icon = styled(FontAwesomeIcon$1)(_t$7 || (_t$7 = _$8`
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
  children,
  onSubmit,
  ...props
}) => {
  const methods = useForm();
  return /*#__PURE__*/React.createElement(FormProvider, methods, /*#__PURE__*/React.createElement("form", Object.assign({
    onSubmit: onSubmit && methods.handleSubmit(onSubmit)
  }, props), children));
};

const Error = ({
  name,
  validations,
  ...props
}) => {
  var _errors$name, _errors$name2, _errors$name3, _errors$name4, _errors$name5, _errors$name6, _errors$name7;
  const {
    formState: {
      errors
    }
  } = useFormContext();
  return /*#__PURE__*/React.createElement("span", props, ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.type) === 'required' && validations.required, ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.type) === 'min' && validations.min, ((_errors$name3 = errors[name]) === null || _errors$name3 === void 0 ? void 0 : _errors$name3.type) === 'max' && validations.max, ((_errors$name4 = errors[name]) === null || _errors$name4 === void 0 ? void 0 : _errors$name4.type) === 'minLength' && validations.minLength, ((_errors$name5 = errors[name]) === null || _errors$name5 === void 0 ? void 0 : _errors$name5.type) === 'maxLength' && validations.maxLength, ((_errors$name6 = errors[name]) === null || _errors$name6 === void 0 ? void 0 : _errors$name6.type) === 'pattern' && validations.pattern, ((_errors$name7 = errors[name]) === null || _errors$name7 === void 0 ? void 0 : _errors$name7.type) === 'validate' && validations.validate);
};

const Input = ({
  id,
  name: _name = '__name-required__',
  value,
  validations,
  ...props
}) => {
  const {
    register
  } = useFormContext();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", Object.assign({
    id: id ? `${_name}:${id}` : `${_name}:${useId()}`,
    name: _name,
    defaultValue: value
  }, register(_name, {
    ...validations
  }), props)));
};

export { Box$1 as Box, Button$1 as Button, Error, Flex$1 as Flex, FontAwesomeIcon, Form, Grid$1 as Grid, Input, NormalizeCss, Track$1 as Track, _$6 as _ };
//# sourceMappingURL=index.modern.js.map
