/* Packages */
import styled, { css } from 'styled-components'
import * as ss from 'styled-system'

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

  ${ss.compose(ss.color, ss.layout, ss.position, ss.space, ss.typography)}
`
