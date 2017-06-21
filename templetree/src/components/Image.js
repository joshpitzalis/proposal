import React from "react"
import PropTypes from "prop-types"

const Image = ({ source, alt }) =>
  <div className="center measure-wide f5 pv3 lh-copy ph2">
    <img src={source} alt={alt} />
  </div>

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
