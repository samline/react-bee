/* Default */
import React from 'react'

/* Packages */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Styles */
import { Icon } from './styles'

/* Libraries */
import * as fab from './fonts/brands'
import * as fad from './fonts/duotone'
import * as fal from './fonts/light'
import * as far from './fonts/regular'
import * as fas from './fonts/solid'
import * as fat from './fonts/thin'
import * as fasl from './fonts/sharp-light'
import * as fasr from './fonts/sharp-regular'
import * as fass from './fonts/sharp-solid'

/* Settings */
library.add(fab, fad, fal, far, fas, fat, fasl, fasr, fass)

/**
 * FontAwesomeIcon
 * @param {string} icon (required) - The icon to use. (e.g. 'chevron-right')
 * @param {string} lib - The library to use. - (e.g. 'fas', 'fab', 'far') - default: 'fas'
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
