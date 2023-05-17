/* Default */
import React from 'react'

/* Packages */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Styles */
import { Icon } from './styles'

/* Libraries */
import { fab } from './fonts/free-brands-svg-icons'
import { fad } from './fonts/pro-duotone-svg-icons'
import { fal } from './fonts/pro-light-svg-icons'
import { far } from './fonts/pro-regular-svg-icons'
import { fas } from './fonts/pro-solid-svg-icons'
import { fat } from './fonts/pro-thin-svg-icons'
import { fasl } from './fonts/sharp-light-svg-icons'
import { fasr } from './fonts/sharp-regular-svg-icons'
import { fass } from './fonts/sharp-solid-svg-icons'

/* Settings */
library.add(fab, fad, fal, far, fas, fasl, fasr, fass, fat)

/**
 * FontAwesomeIcon
 * @param {string} icon (required) - The icon to use. (e.g. 'chevron-right')
 * @param {string} lib - The library to use. - (e.g. fab, fad, fal, far, fas, fasl, fasr, fass, fat) - default: 'fas'
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 * @returns component
 *
 * @docs https://fontawesome.com/search
 * @styleSystem [color, layout, position, space, typography] - https://styled-system.com/table
 */

export const FontAwesomeIcon = ({ icon, lib = 'fas', innerRef, ...props }) => {
  return <Icon icon={[lib, icon]} {...props} ref={innerRef} />
}
