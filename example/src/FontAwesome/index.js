/* Default */
import React from 'react'

/* Packages */
import { _, Box, Flex, Track, FontAwesomeIcon } from 'react-bee'

export const FontAwesome = () => {
  return (
    <Box>
      <Track>
        <h2>Font awesome Pro 6.4.0</h2>
      </Track>
      <Track>
        <Flex gridGap='1.25rem' justifyContent='space-between'>
          <Icon icon='house' lib='fas' label='solid' />
          <Icon icon='house' lib='far' label='regular' />
          <Icon icon='house' lib='fal' label='light' />
          <Icon icon='house' lib='fat' label='thin' />
          <Icon icon='house' lib='fad' label='duotone' />
          <Icon icon='house' lib='fass' label='sharp solid' />
          <Icon icon='house' lib='fasr' label='sharp regular' />
          <Icon icon='house' lib='fasl' label='sharp light' />
        </Flex>
      </Track>
    </Box>
  )
}

const Icon = ({ icon, lib, label }) => {
  return (
    <_ textAlign='center'>
      <FontAwesomeIcon icon={icon} lib={lib} fontSize='2.5rem' />
      <_ as='p' mt='0.625rem'>
        {label}
      </_>
      <_ as='p' fontWeight='700'>
        {lib}
      </_>
    </_>
  )
}
