/* Default */
import React from 'react'

/* Packages */
import { useFormContext, Controller } from 'react-hook-form'
import { useId } from 'react-id-generator'
import Cleave from 'cleave.js/react'

/**
 * InputFormat
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
 * @param {object} validations (Docs: https://react-hook-form.com/get-started#Applyvalidation)
 * @param {object} format - (e.g. { creditCard: true, ... }) - (Docs: https://nosir.github.io/cleave.js/)
 * @param {...any} props
 * @returns
 */

export const InputFormat = React.forwardRef(
  ({ id, name, value, validations, format, ...props }, ref) => {
    const {
      control,
      setValue,
      formState: { errors }
    } = useFormContext()

    return (
      <React.Fragment>
        {name && (
          <Controller
            control={control}
            name={name}
            rules={{ ...validations }}
            render={({ field: { onChange, onBlur } }) => {
              return (
                <Cleave
                  ref={ref}
                  id={id ? `${name}:${id}` : `${name}:${useId()}`}
                  name={name}
                  aria-invalid={errors[name] && 'true'}
                  // cleavejs
                  onChange={onChange}
                  onBlur={onBlur}
                  onInit={({ lastInputValue }) =>
                    setValue(name, lastInputValue)
                  }
                  options={{ ...format }}
                  value={value}
                  // end cleavejs
                  {...props}
                />
              )
            }}
          />
        )}
      </React.Fragment>
    )
  }
)
