/* Default */
import React from 'react'

/* Packages */
import { FormProvider, useForm } from 'react-hook-form'

/**
 * Form
 * @param {children} children (required)
 * @param {function} onSubmit - if !onSubmit the form will make a normal request
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 * @returns onSubmit(data => ())
 */

export const Form = ({ children, onSubmit, innerRef, ...props }) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit && methods.handleSubmit(onSubmit)}
        ref={(e) => (innerRef ? (innerRef.current = e) : null)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  )
}
