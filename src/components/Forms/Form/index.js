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
 * @param {object} defaultValues - { name: value } - set default values for fields
 * - e.g. { checkbox_fruits: ['apple', 'orange', ...], ... } or { accept: '1', ... }
 * - required for chechbox/radio - optional for all other fields
 * @param {...any} props
 * @returns onSubmit(({ e, data, methods }) => {...})
 * @returns onChange(({ e, methods }) => {...})
 */

export const Form = ({
  children,
  autoSubmit,
  onSubmit,
  onChange,
  innerRef,
  defaultValues,
  ...props
}) => {
  const methods = useForm({ defaultValues: defaultValues ?? {} })
  const doSubmit = methods.handleSubmit((data, e) =>
    onSubmit({ data: data, methods: methods, e: e })
  )

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
