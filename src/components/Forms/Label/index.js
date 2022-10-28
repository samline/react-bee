/* Default */
import React from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'
import { useId } from 'react-id-generator'

/**
 * Label
 * @param {children} children
 * @param {string} id
 * @param {string} name (required)
 * @param {string} content
 * @param {...any} props
 * @returns
 */

export const Label = React.forwardRef(
  ({ children, id, name, content, ...props }, ref) => {
    const {
      formState: { errors }
    } = useFormContext()

    return (
      <React.Fragment>
        {name && (
          <label
            ref={ref}
            htmlFor={id ? `${name}:${id}` : `${name}:${useId()}`}
            aria-invalid={errors[name] && 'true'}
            {...props}
          >
            {children ?? content}
          </label>
        )}
      </React.Fragment>
    )
  }
)
