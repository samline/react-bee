/* Default */
import React from 'react'

/* Packages */
import {
  Box,
  Flex,
  Track,
  Form,
  Label,
  Input,
  Select,
  Error,
  GenericError
} from 'react-bee'

export const CustomForm = () => {
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
              name='select'
              validations={{ required: true }}
              placeholder='Select an option'
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
                />
                <Label id={i + 1} name='checkbox_label' content='checkbox' />
              </Track>
            ))}
          {Array(3)
            .fill()
            .map((empty, i) => (
              <Track key={i}>
                <Input type='radio' id={i + 1} name='radio_label' value={i} />
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
            <Input name='input_credit_card' placeholder='Credit card' />
          </Track>
          <Track>
            <input type='submit' />
            <GenericError message='Hay errores en el formulario' />
          </Track>
        </Flex>
      </Form>
    </Box>
  )
}
