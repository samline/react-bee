/* Default */
import React from 'react'

/* Packages */
import { config, library } from '@fortawesome/fontawesome-svg-core'

/* Styles */
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Icon } from './styles'

/* Libraries */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

/* Settings */
config.autoAddCss = false
library.add(fab, far, fas)

/**
 * FontAwesomeIcon
 * @param {string} icon (required) - The icon to use. e.g. 'chevron-right'
 * @param {string} lib - The library to use. - e.g. 'fas', 'fab', 'far' - Default: 'fas'
 * @param {object} props - The props to pass to the component.
 * @returns
 *
 * @docs https://fontawesome.com/search
 * @styleSystem [color, layout, position, space, typography] - https://styled-system.com/table
 */

export const FontAwesomeIcon = ({ icon, lib = 'fas', ...props }) => {
  return <Icon icon={[lib, icon]} {...props} />
}
