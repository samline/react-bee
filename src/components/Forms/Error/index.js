/* Default */
import React from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'

/**
 * Error
 * @param {string} name (required)
 * @param {object} validations - e.g. { required: 'This field is required', maxLenght: '...', ... }
 * @param {...any} props
 * @returns
 */

/* TODO: Auto translate and custom messages */
/* TODO: Set custom error */

export const Error = ({ name, validations, ...props }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <React.Fragment>
      {name && (
        <span role='alert' {...props}>
          {errors[name]?.type === 'required' && validations.required}
          {errors[name]?.type === 'min' && validations.min}
          {errors[name]?.type === 'max' && validations.max}
          {errors[name]?.type === 'minLength' && validations.minLength}
          {errors[name]?.type === 'maxLength' && validations.maxLength}
          {errors[name]?.type === 'pattern' && validations.pattern}
          {errors[name]?.type === 'validate' && validations.validate}
          {errors[name]?.type === 'custom' && validations.custom}
        </span>
      )}
    </React.Fragment>
  )
}

/**
 * GenericError
 * @param {string} message (required)
 * @param {...any} props
 * @returns
 */

export const GenericError = ({ message, ...props }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <React.Fragment>
      {Object.keys(errors).length > 0 && message && (
        <span role='alert' {...props}>
          {message}
        </span>
      )}
    </React.Fragment>
  )
}
