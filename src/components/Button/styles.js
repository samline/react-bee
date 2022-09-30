/* Packages */
import styled, { css } from 'styled-components'
import {
  compose,
  color,
  layout,
  position,
  space,
  typography
} from 'styled-system'

export const Button = styled.a`
  color: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      filter: grayscale(100%);
      opacity: 0.5;
      pointer-events: none;
    `}

  ${compose(color, layout, position, space, typography)}
`
