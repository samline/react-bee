/* Default */
import React from 'react'
import Link from 'next/link'

/* Styles */
import { Button as StyledButton } from './styles'

/**
 * Button
 * @param {children}
 * @param {string} label - Label to display in the button - disabled if has children
 * @param {string} href - Href of the link
 * @param {string} target - Target of the link - (e.g. _blank)
 * @param {boolean} scroll - Go to top on click - default: true
 * @param {props}
 * @returns
 *
 * @styleSystem [color, layout, position, space, typography] - https://styled-system.com/table
 */

export const Button = React.forwardRef(({ scroll = true, ...props }, ref) => {
  return (
    <React.Fragment>
      {((props.target || !props.href) && <A ref={ref} {...props} />) || (
        <Link href={props.href} passHref scroll={scroll}>
          <A ref={ref} {...props} />
        </Link>
      )}
    </React.Fragment>
  )
})

Button.displayName = 'Button'

const A = React.forwardRef(({ children, label, ...props }, ref) => {
  return (
    <StyledButton
      ref={ref}
      type={props.as === 'button' ? 'submit' : null}
      {...props}
    >
      {(children && children) || <span>{label}</span>}
    </StyledButton>
  )
})

A.displayName = 'A'