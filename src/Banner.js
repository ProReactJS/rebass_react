
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Full-height banner with styling for background images
 */

const Banner = ({
  align,
  backgroundImage,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, colors, fontSizes } = config

  const alignment = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }

  const alignItems = alignment[align]

  const sx = {
    boxSizing: 'border-box',
    fontSize: fontSizes[1],
    display: 'flex',
    flexDirection: 'column',
    alignItems,
    justifyContent: 'center',
    textAlign: align === 'center' ? 'center' : null,
    padding: scale[4],
    marginBottom: scale[3],
    color: colors.white,
    backgroundColor: colors.primary,
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
  }

  return (
    <Base
      {...props}
      className='Banner'
      baseStyle={sx} />
  )
}

Banner.propTypes = {
  /** Horizontal alignment */
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Background image source */
  backgroundImage: React.PropTypes.string
}

Banner.defaultProps = {
  align: 'center'
}

Banner.contextTypes = {
  rebass: React.PropTypes.object
}

export default Banner
