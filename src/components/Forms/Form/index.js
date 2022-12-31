/* Default */
import React from 'react'

/* Packages */
import { FormProvider, useForm } from 'react-hook-form'

/**
 * Form
 * @param {children} children (required)
 * @param {function} onSubmit - if !onSubmit the form will make a normal request
 * @param {reference} innerRef - you can still assign to ref
 * @param {object} defaultValues - { name: value } - set default values for fields
 * - e.g. { checkbox_fruits: ['apple', 'orange', ...], ... } or { accept: '1', ... }
 * - required for chechbox/radio - optional for all other fields
 * @param {...any} props
 * @returns onSubmit((data, e, methods) => {})
 */

export const Form = ({
  children,
  onSubmit,
  innerRef,
  defaultValues,
  ...props
}) => {
  const methods = useForm({ defaultValues: defaultValues ?? {} })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={
          onSubmit &&
          methods.handleSubmit((data, e) => onSubmit(data, e, methods))
        }
        ref={(e) => (innerRef ? (innerRef.current = e) : null)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  )
}
