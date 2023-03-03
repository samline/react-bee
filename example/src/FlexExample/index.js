/* Default */
import React, { useRef, useEffect } from 'react'

/* Packages */
import { Box, Flex, Track } from 'react-bee'

export const FlexExample = () => {
  const ref = useRef(null)


  useEffect(() => {
    console.log("🚀 ~ file: index.js:9 ~ FlexExample ~ ref:", ref)

  }, [ref])

  return (
    <Box>
      <Track>
        <h2>Flex</h2>
      </Track>
      <Flex innerRef={ref} flexWrap='wrap' gridGap='10px'>
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
}
