/* Default */
import React from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'

/**
 * Error
 * @param {object} validations - e.g. {required: 'This field is required', maxLenght: '...', ...}
 * @param {string} name
 * @param {...any} props
 * @returns
 */

/* TODO: Auto translate and custom messages */

export const Error = ({ name, validations, ...props }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <span {...props}>
      {errors[name]?.type === 'required' && validations.required}
      {errors[name]?.type === 'min' && validations.min}
      {errors[name]?.type === 'max' && validations.max}
      {errors[name]?.type === 'minLength' && validations.minLength}
      {errors[name]?.type === 'maxLength' && validations.maxLength}
      {errors[name]?.type === 'pattern' && validations.pattern}
      {errors[name]?.type === 'validate' && validations.validate}
    </span>
  )
}
