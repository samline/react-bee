/* Default */
import React from 'react'

/* Packages */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Styles */
import { Icon } from './styles'

/* Libraries */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fat } from '@fortawesome/pro-thin-svg-icons'
import { fasl } from '@fortawesome/sharp-light-svg-icons'
import { fasr } from '@fortawesome/sharp-regular-svg-icons'
import { fass } from '@fortawesome/sharp-solid-svg-icons'

/* Settings */
library.add(fab, fad, fal, far, fas, fasl, fasr, fass, fat)

/**
 * FontAwesomeIconPro
 * @param {string} icon (required) - The icon to use. (e.g. 'chevron-right')
 * @param {string} lib - The library to use. - (e.g. fab, fad, fal, far, fas, fasl, fasr, fass, fat) - default: 'fas'
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 * @returns component
 *
 * @docs https://fontawesome.com/search
 * @styleSystem [color, layout, position, space, typography] - https://styled-system.com/table
 *
 * @note create a .npmrc file and copy:
 *  @fortawesome:registry=https://npm.fontawesome.com/
 *  //npm.fontawesome.com/:_authToken=$FONTAWESOME_NPM_AUTH_TOKEN
 *
 * @note in your env variables set FONTAWESOME_NPM_AUTH_TOKEN and your fontawesome pro TOKEN as value
 *
 */

export const FontAwesomeIconPro = ({ icon, lib = 'fas', innerRef, ...props }) => {
  return <Icon icon={[lib, icon]} {...props} ref={innerRef} />
}
