/* Default */
import React from 'react'

/* Packages */
import { Box, Track, Button as BeeButton } from 'react-bee'

export const Button = () => (
  <Box>
    <Track>
      <h2>Button</h2>
    </Track>
    <Track>
      <BeeButton href='/button-1' label='Button 1' />
      &nbsp; - &nbsp;
      <BeeButton href='/button-2'>Button 2</BeeButton>
      &nbsp; - &nbsp;
      <BeeButton href='/button-3' label='Button 3' target='_blank' />
    </Track>
  </Box>
)
