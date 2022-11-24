/* Default */
import React from 'react'

/* Packages */
import { NormalizeCss } from 'react-bee'

/* Examples */
import { FlexExample } from './FlexExample'
import { GridExample } from './GridExample'
import { CustomForm } from './CustomForm'
import { FormValidation } from './FormValidation'

const App = () => {
  return (
    <>
      <NormalizeCss />

      <CustomForm />
      <br />
      <br />
      <hr />
      <FormValidation />
      <br />
      <br />
      <hr />
      <GridExample />
      <br />
      <br />
      <hr />
      <FlexExample />
    </>
  )
}

export default App
