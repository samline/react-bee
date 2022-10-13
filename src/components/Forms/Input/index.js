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
 * @param {object} validations
 * @param {...any} props
 * @returns
 */

export const Input = ({
  id,
  name = '__name-required__',
  value,
  validations,
  ...props
}) => {
  const { register } = useFormContext()

  return (
    <React.Fragment>
      <input
        id={id ? `${name}:${id}` : `${name}:${useId()}`}
        name={name}
        defaultValue={value}
        {...register(name, { ...validations })}
        {...props}
      />
    </React.Fragment>
  )
}
