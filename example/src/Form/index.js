/* Default */
import React from 'react'

/* Packages */
import { Box, Flex, Track, Form, Error, Input } from 'react-bee'

export const HookForm = () => {
  const handleSubmit = (data) => {
    console.log('🚀 ~ file: index.js ~ line 9 ~ handleSubmit ~ data', data)
  }
  return (
    <Box>
      <Track>
        <h2>Form</h2>
      </Track>
      <Form onSubmit={handleSubmit}>
        <Flex>
          <Track>
            <Input
              name='test'
              validations={{ required: true, maxLength: 5 }}
              placeholder='Input test'
            />
            <Error
              name='test'
              validations={{
                required: 'Es requerido',
                maxLength: 'Solo hasta 5 caracteres'
              }}
            />
          </Track>
          <Track>
            <Input
              name='test2'
              validations={{ required: true, maxLength: 5 }}
              placeholder='Input test 2'
            />
            <Error message='lol' />
          </Track>
          <Track>
            <input type='submit' />
          </Track>
        </Flex>
      </Form>
    </Box>
  )
}
