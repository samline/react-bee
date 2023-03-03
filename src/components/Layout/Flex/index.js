/* Default */
import React from 'react'

/* Styles */
import { Flex as FlexStyled } from './styles'

/**
 * Flex
 *
 * @param {boolean} show - Show container outline
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 * @returns component
 *
 * @styleSystem [flexbox, grid, layout, space] - https://styled-system.com/table
 */

export const Flex = ({ children, innerRef, ...props }) => {
  return (
    <FlexStyled {...props} ref={innerRef}>
      {children}
    </FlexStyled>
  )
}
