/* Default */
import React from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'
import { useId } from 'react-id-generator'

/**
 * Input
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
 * @param {object} validations (Docs: https://react-hook-form.com/get-started#Applyvalidation)
 * @param {...any} props
 * @returns
 */

export const Input = React.forwardRef(
  ({ id, name, value, validations, ...props }, ref) => {
    const {
      register,
      formState: { errors }
    } = useFormContext()

    return (
      <React.Fragment>
        {name && (
          <input
            ref={ref}
            id={id ? `${name}:${id}` : `${name}:${useId()}`}
            name={name}
            defaultValue={value}
            aria-invalid={errors[name] && 'true'}
            {...register(name, { ...validations })}
            {...props}
          />
        )}
      </React.Fragment>
    )
  }
)
