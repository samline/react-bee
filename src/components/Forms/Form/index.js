/* Default */
import React from 'react'

/* Packages */
import { FormProvider, useForm } from 'react-hook-form'

/**
 * Form
 * @param {children} children (required)
 * @param {boolean} autoSubmit - auto submit if any field changes
 * @param {function} onSubmit - if !onSubmit the form will make a normal request
 * @param {function} onChange
 * @param {reference} innerRef - you can still assign to ref
 * @param {object} options - https://react-hook-form.com/api/useform
 * @param {...any} props
 * @returns onSubmit(({ e, data, methods }) => {...})
 * @returns onChange(({ e, methods }) => {...})
 *
 * @info defaultValues is required for chechbox/radio - optional for all other fields
 */

export const Form = ({
  children,
  autoSubmit,
  onSubmit,
  onChange,
  innerRef,
  options = {},
  ...props
}) => {
  const methods = useForm({ shouldUnregister: true, ...options })
  const doSubmit = methods.handleSubmit((data, e) => onSubmit({ data: data, methods: methods, e: e }))

  return (
    <FormProvider {...methods}>
      <form
        ref={(e) => (innerRef ? (innerRef.current = e) : null)}
        onSubmit={onSubmit && doSubmit}
        onChange={(e) => {
          onChange && onChange({ e: e, methods: methods })
          autoSubmit && onSubmit && doSubmit()
        }}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  )
}
