/* Default */
import React from 'react'

/* Styles */
import { Track as TrackStyled } from './styles'

/**
 * Track
 * @param {boolean} show - Show container outline
 * @param {boolean} inner - Default padding will not be applied, for example to nest Tracks
 * @param {...any} props
 * @returns component
 *
 * @styleSystem [flexbox, grid, layout, space] - https://styled-system.com/table
 */

export const Track = ({ children, ...props }) => (
  <TrackStyled {...props}>{children}</TrackStyled>
)
