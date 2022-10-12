/* Default */
import React from 'react'

/* Packages */
import { Box, Flex, Track } from 'react-bee'

export const FlexExample = () => (
  <Box>
    <Track>
      <h2>Flex</h2>
    </Track>
    <Flex flexWrap='wrap' gridGap='10px'>
      <>
        {Array(10)
          .fill()
          .map((empty, i) => (
            <Track
              key={i}
              background={`#${Math.floor(Math.random() * 16777215).toString(
                16
              )}`}
              flex='1 1 300px'
              textAlign='center'
            >
              {i}
            </Track>
          ))}
      </>
    </Flex>
  </Box>
)
