/* Default */
import React from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'
import { useId } from 'react-id-generator'

/**
 * Select
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
 * @param {object} validations (Docs: https://react-hook-form.com/get-started#Applyvalidation)
 * @param {...any} props
 * @returns
 */

export const Select = React.forwardRef(
  ({ children, id, name, value = '', validations, ...props }, ref) => {
    const {
      register,
      formState: { errors }
    } = useFormContext()

    return (
      <React.Fragment>
        {name && (
          <select
            ref={ref}
            id={id ? `${name}:${id}` : `${name}:${useId()}`}
            name={name}
            defaultValue={value}
            aria-invalid={errors[name] && 'true'}
            {...register(name, { ...validations })}
            {...props}
          >
            {props.placeholder && (
              <option disabled={validations?.required} value=''>
                {props.placeholder}
              </option>
            )}
            {children}
          </select>
        )}
      </React.Fragment>
    )
  }
)

/* TODO: styles for placeholder */
/* <style>
      select:required:invalid {
        color: #666;
      }
      option[value=""][disabled] {
        display: none;
      }
      option {
        color: #000;
      }
    </style> */
