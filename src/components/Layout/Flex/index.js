/* Default */
import React from 'react'

/* Styles */
import { Flex as FlexStyled } from './styles'

/**
 * Flex
 * @param {boolean} show - Show container outline
 * @param {...any} props
 * @returns component
 *
 * @styleSystem [flexbox, grid, layout, space] - https://styled-system.com/table
 */

export const Flex = ({ children, ...props }) => (
  <FlexStyled {...props}>{children}</FlexStyled>
)
