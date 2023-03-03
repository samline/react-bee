/* Default */
import React from 'react'

/* Styles */
import { Grid as GridStyled } from './styles'

/**
 * Grid
 * @param {boolean} show - Show container outline
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 * @returns component
 *
 * @styleSystem [flexbox, grid, layout, space] - https://styled-system.com/table
 */

export const Grid = ({ children, innerRef, ...props }) => (
  <GridStyled {...props} ref={innerRef}>
    {children}
  </GridStyled>
)
