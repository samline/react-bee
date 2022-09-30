/* Default */
import React from 'react'

/* Styles */
import { _ as _Styled } from './styles'

/**
 * _ - "div" as default
 * @param {...any} props
 * @returns Component
 *
 * @styleSystem * - https://styled-system.com/table
 */

export const _ = ({ children, ...props }) => (
  <_Styled {...props}>{children}</_Styled>
)
