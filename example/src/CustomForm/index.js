/* Default */
import React, { useRef } from 'react'

/* Packages */
import {
  Box,
  Flex,
  Track,
  Form,
  Label,
  Input,
  InputFormat,
  Select,
  Textarea,
  Error,
  GlobalError
} from 'react-bee'

export const CustomForm = () => {
  const select = useRef(null)
  const creditCard = useRef(null)

  const handleSubmit = (data) => {
    console.log('🚀 ~ file: index.js ~ line 9 ~ handleSubmit ~ data', data)
  }

  return (
    <Box>
      <Track>
        <h2>Custom form</h2>
      </Track>
      <Form onSubmit={handleSubmit}>
        <Flex alignItems='start' flexDirection='column'>
          <Track>
            <Select
              innerRef={select}
              name='select'
              validations={{ required: true }}
              placeholder='Select an option'
              onChange={() =>
                console.log(
                  '🚀 ~ file: index.js:21 ~ CustomForm ~ select',
                  select.current
                )
              }
            >
              <option value='option-1'>Option 1</option>
              <option value='option-2'>Option 2</option>
              <option value='option-3'>Option 3</option>
            </Select>
            <Error
              name='select'
              validations={{
                required: 'Es requerido'
              }}
            />
          </Track>
          <Track>
            <Select
              name='select_selected'
              placeholder='Select an option'
              value='option-2'
            >
              <option value='option-1'>Option 1</option>
              <option value='option-2'>Option 2</option>
              <option value='option-3'>Option 3</option>
            </Select>
          </Track>
          <Track>
            <Label id='customId' name='input_label' content='Label' />
            <Input id='customId' name='input_label' placeholder='With label' />
          </Track>
          {Array(3)
            .fill()
            .map((empty, i) => (
              <Track key={i}>
                <Input
                  type='checkbox'
                  id={i + 1}
                  name='checkbox_label'
                  value={i}
                  validations={{ required: true }}
                  checked={i !== 1}
                />
                <Label id={i + 1} name='checkbox_label' content='checkbox' />
              </Track>
            ))}
          {Array(3)
            .fill()
            .map((empty, i) => (
              <Track key={i}>
                <Input
                  type='radio'
                  id={i + 1}
                  name='radio_label'
                  value={i}
                  checked
                />
                <Label id={i + 1} name='radio_label' content='radio' />
              </Track>
            ))}
          <Track>
            <Input
              type='file'
              name='input_file'
              placeholder='Select file'
              onChange={(e) => console.log(e.target)}
            />
          </Track>
          <Track>
            <InputFormat
              innerRef={creditCard}
              name='input_credit_card'
              placeholder='Credit card'
              format={{
                creditCard: true
              }}
              value='5152313349701111'
              validations={{ minLength: 4, maxLength: 19 }}
              // onChange={() =>
              //   console.log(
              //     '🚀 ~ file: index.js:21 ~ CustomForm ~ select',
              //     creditCard.current.element
              //   )
              // }
            />
            <Error
              name='input_credit_card'
              validations={{
                minLength: 'No es una tarjeta válida',
                maxLength: 'No es una tarjeta válida'
              }}
            />
          </Track>
          <Track>
            <Textarea name='textarea_input' value='Textarea content...' />
          </Track>
          <Track>
            <input type='submit' />
            <GlobalError message='Hay errores en el formulario' />
          </Track>
        </Flex>
      </Form>
    </Box>
  )
}
