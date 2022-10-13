/* Default */
import React from 'react'

/* Packages */
import { NormalizeCss } from 'react-bee'

/* Examples */
import { FlexExample } from './FlexExample'
import { GridExample } from './GridExample'
import { HookForm } from './Form'

const App = () => {
  return (
    <>
      <NormalizeCss />
      <HookForm />
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
