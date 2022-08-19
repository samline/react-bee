/* Default */
import React from 'react'

/* Components */
import { FontAwesomeIcon, Button } from 'react-bee'

const App = () => {
  return (
    <>
      <p>Example 😄</p>
      <FontAwesomeIcon icon='chevron-right' fontSize="50px" color="blue" />
      <br />
      <Button href="http://samline.com" label="lol" target="_blank" />
    </>
  )
}

export default App
