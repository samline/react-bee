/* Default */
import React from 'react'

/* Styles */
import { Box as BoxStyled } from './styles'

/**
 * Box - max-width: 1366px
 * @param {boolean} fullWidth - max-width property will not apply
 * @param {...any} props
 * @returns component
 *
 * @styleSystem [layout, position, space] - https://styled-system.com/table
 */

export const Box = ({ children, ...props }) => (
  <BoxStyled {...props}>{children}</BoxStyled>
)
