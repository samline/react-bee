/* Default */
import React from 'react'
import Link from 'next/link'

/**
 * Button
 * @param {children}
 * @param {string} label - Label to display in the button - disabled if has children
 * @param {string} href - Href of the link
 * @param {string} target - Target of the link - (e.g. _blank)
 * @param {boolean} scroll - Go to top on click - default: true
 * @param {...any} props
 * @returns component
 */

export const Button = ({ ...props }) => {
  return (
    <React.Fragment>
      {((props.target || !props.href) && <Anchor {...props} />) || (<SPALink {...props} />)}
    </React.Fragment>
  )
}

const Anchor = ({ children, label, ...props }) => (
  <a rel={props.target ? 'noreferrer noopener' : null} {...props}>
    {children ?? <span>{label}</span>}
  </a>
)

const SPALink = ({ children, label, scroll = true, ...props }) => (
  <Link scroll={scroll} {...props}>
    {children ?? <span>{label}</span>}
  </Link>
)
