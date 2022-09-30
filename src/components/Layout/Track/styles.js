/* Packages */
import styled, { css } from 'styled-components'
import * as ss from 'styled-system'

export const Track = styled.div`
  padding: 0.625rem;

  ${(props) =>
    props.show &&
    css`
      outline: 2px dashed;
    `}

  ${(props) =>
    props.inner &&
    css`
      padding: 0rem;
    `}

  ${ss.compose(
    ss.background,
    ss.border,
    ss.color,
    ss.flexbox,
    ss.grid,
    ss.layout,
    ss.space,
    ss.typography
  )}
`
