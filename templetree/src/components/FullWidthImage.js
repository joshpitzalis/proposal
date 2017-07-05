import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ source, alt }) =>
  <img src={source} alt={alt} className="w-100" />

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
