import React from 'react'
import PropTypes from 'prop-types'

const TextBlock = ({ p1, p2, p3, p4, p5 }) =>
  <div className="center measure-wide f5 pv3 lh-copy">
    <p>
      {p1}
    </p>
    <p>
      {p2}
    </p>
    <p>
      {p3}
    </p>
    <p>
      {p4}
    </p>
    <p>
      {p5}
    </p>
  </div>

TextBlock.propTypes = {}
TextBlock.defaultProps = {}

export default TextBlock
