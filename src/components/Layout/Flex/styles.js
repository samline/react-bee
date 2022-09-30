/* Packages */
import styled, { css } from 'styled-components'
import { compose, flexbox, grid, layout, space } from 'styled-system'

export const Flex = styled.div`
  align-items: center;
  display: flex;

  ${(props) =>
    props.show &&
    css`
      outline: 2px dashed;
    `}

  ${compose(flexbox, grid, layout, space)}
`
