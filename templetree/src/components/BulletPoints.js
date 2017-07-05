import React from 'react'
import PropTypes from 'prop-types'

const BulletPoints = ({ list }) =>
  <div className="center measure lh-copy">
    <ul>{list.map(point => <li>{point}</li>)}</ul>
  </div>

export default BulletPoints
