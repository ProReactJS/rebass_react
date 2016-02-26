
import React from 'react'
import theme from './theme'

/**
 * Label element for form controls
 */

const Label = ({ hide, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const labelStyle = rebass ? rebass.Label : {}
  const { fontSizes, bold } = config

  const hideStyles = hide ? {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)'
  } : {}

  return <label
    {...props}
    className='Label'
    style={{
      fontSize: fontSizes[5],
      fontWeight: bold,
      ...labelStyle,
      ...hideStyles,
      ...style
    }} />
}

Label.propTypes = {
  /** Accessibly hide label for use in high density UI.
   *  This can still cause accessibility issues. Use this with caution.
   */
  hide: React.PropTypes.bool
}

Label.contextTypes = {
  rebass: React.PropTypes.object
}

export default Label

