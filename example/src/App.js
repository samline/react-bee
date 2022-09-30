/* Default */
import React from 'react'

/* Packages */
import { NormalizeCss } from 'react-bee'

/* Examples */
import { FlexExample } from './FlexExample'
import { GridExample } from './GridExample'

const App = () => {
  return (
    <>
      <NormalizeCss />
      <FlexExample />
      <br />
      <br />
      <hr />
      <GridExample />
    </>
  )
}

export default App
