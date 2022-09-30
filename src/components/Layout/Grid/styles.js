/* Packages */
import styled, { css } from 'styled-components'
import { compose, flexbox, grid, layout, space } from 'styled-system'

export const Grid = styled.div`
  align-items: center;
  display: grid;

  ${(props) =>
    props.show &&
    css`
      outline: 2px dashed;
    `}

  ${compose(flexbox, grid, layout, space)}
`
