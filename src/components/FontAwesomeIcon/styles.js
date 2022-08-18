/* Packages */
import styled from 'styled-components'
import * as ss from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  ${ss.compose(ss.color, ss.layout, ss.position, ss.space, ss.typography)}
`
