/* Default */
import React from 'react'

/* Packages */
import { NormalizeCss } from 'react-bee'

/* Examples */
import { FlexExample } from './FlexExample'
import { GridExample } from './GridExample'
import { Form } from './Form'

const App = () => {
  return (
    <>
      <NormalizeCss />
      <FlexExample />
      <br />
      <br />
      <hr />
      <GridExample />
      <br />
      <br />
      <hr />
      <Form />
    </>
  )
}

export default App
