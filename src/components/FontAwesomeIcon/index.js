/* Default */
import React from 'react'

/* Packages */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Styles */
import { Icon } from './styles'

/* Libraries */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

/* Package.json  */
/* "@fortawesome/fontawesome-svg-core": "^6.2.0",
"@fortawesome/free-brands-svg-icons": "^6.2.0",
"@fortawesome/free-regular-svg-icons": "^6.2.0",
"@fortawesome/free-solid-svg-icons": "^6.2.0",
"@fortawesome/react-fontawesome": "^0.2.0", */

/* Settings */
library.add(fab, far, fas)

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
