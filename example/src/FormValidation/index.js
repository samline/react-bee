/* Default */
import React from 'react'

/* Packages */
import { Box, Flex, Track, Form, Error, Input } from 'react-bee'

export const FormValidation = () => {
  const handleSubmit = (data) => {
    console.log('🚀 ~ file: index.js ~ line 9 ~ handleSubmit ~ data', data)
  }
  return (
    <Box>
      <Track>
        <h2>Form validation</h2>
      </Track>
      <Form onSubmit={handleSubmit}>
        <Flex>
          <Track>
            <Input
              name='required_input'
              validations={{ required: true }}
              placeholder='Input required'
            />
            <Error
              name='required_input'
              validations={{
                required: 'Es requerido'
              }}
            />
          </Track>
          <Track>
            <Input
              name='max_input'
              validations={{ maxLength: 5 }}
              placeholder='Input maxLength 5'
            />
            <Error
              name='max_input'
              validations={{
                maxLength: 'Solo hasta 5 caracteres'
              }}
            />
          </Track>
          <Track>
            <Input
              name='min_input'
              validations={{ minLength: 5 }}
              placeholder='Input minLength 5'
            />
            <Error
              name='min_input'
              validations={{
                minLength: 'Minimo 5 caracteres'
              }}
            />
          </Track>
          <Track>
            <input type='submit' />
          </Track>
        </Flex>
      </Form>
    </Box>
  )
}
