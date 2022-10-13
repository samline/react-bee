/* Default */
import React from 'react'

/* Packages */
import { FormProvider, useForm } from 'react-hook-form'

/**
 * Form
 * @param {children} children (required)
 * @param {function} onSubmit - if !onSubmit the form will make a normal request
 * @param {...any} props
 * @returns
 */

export const Form = ({ children, onSubmit, ...props }) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit && methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  )
}
