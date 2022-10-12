/* Default */
import React from 'react'

/* Packages */
import { Box, Grid, Track, _ } from 'react-bee'

export const GridExample = () => (
  <Box>
    <Track>
      <h2>Grid</h2>
    </Track>
    <Grid
      gridTemplateColumns='repeat(auto-fill, minmax(min(300px, 100%), 1fr))'
      gridGap='10px'
    >
      <>
        {Array(10)
          .fill()
          .map((empty, i) => (
            <Track
              key={i}
              background={`#${Math.floor(Math.random() * 16777215).toString(
                16
              )}`}
              flex='1 1 auto'
              textAlign='center'
            >
              <_ as='span' fontWeight='bold'>
                {i}
              </_>
            </Track>
          ))}
      </>
    </Grid>
  </Box>
)
