/* Default */
import React from 'react'

/* Packages */
import { useFormContext, Controller } from 'react-hook-form'
import { useId } from 'react-id-generator'

/* ./ */
import { Quill as QuillEditor, modules, formats } from './config'

/**
 * Quill
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
//  * @param {reference} innerRef - you can still assign to ref
 * @param {object} validations (Docs: https://react-hook-form.com/get-started#Applyvalidation)
 * @param {...any} props
 * @returns
 *
 * @docs https://quilljs.com/docs/formats/
 */

export const Quill = ({ id, name, validations, className = '', ...props }) => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors }
  } = useFormContext()
  const value = getValues(name)

  return (
    <React.Fragment>
      {name && (
        <Controller
          control={control}
          name={name}
          rules={{ ...validations }}
          render={({ field: { onChange, onBlur } }) => {
            return (
              <QuillEditor
                id={id ? `${name}:${id}` : `${name}:${useId()}`}
                name={name}
                aria-invalid={errors[name] && 'true'}
                className={`${className} ${errors[name] ? 'aria-invalid' : ''}`}
                // Quill
                theme='snow'
                modules={modules}
                formats={formats}
                defaultValue={value ? value : ''}
                // End Quill
                {...props}
                onChange={(html) => {
                  onChange(html)
                  setValue(name, html)
                  props.onChange && props.onChange(html)
                }}
                onBlur={(range, source, editor) => {
                  const hasContent = editor.getText().length > 1
                  const html = editor.getHTML()

                  onBlur(hasContent && html)
                  setValue(name, hasContent && html)
                  props.onBlur && props.onBlur(hasContent && html)
                }}
              />
            )
          }}
        />
      )}
    </React.Fragment>
  )
}
