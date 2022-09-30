/* Packages */
import styled from 'styled-components'
import {
  compose,
  color,
  layout,
  position,
  space,
  typography
} from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  height: 1em;
  ${compose(color, layout, position, space, typography)}
`

export default FontAwesomeGlobalStyle
