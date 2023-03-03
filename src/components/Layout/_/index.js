/* Default */
import React from 'react'

/* Styles */
import { _ as _Styled } from './styles'

/**
 * _ - "div" as default
 *
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 * @returns Component
 *
 * @styleSystem * - https://styled-system.com/table
 */

export const _ = ({ children, innerRef, ...props }) => (
  <_Styled {...props} ref={innerRef}>
    {children}
  </_Styled>
)
