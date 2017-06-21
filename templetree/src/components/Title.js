import React from "react"
import PropTypes from "prop-types"

const Title = ({ title }) =>
  <div className="center measure-wide f5 pt5 lh-copy ph2">
    <h2 className="f1 lh-title">{title}</h2>
  </div>

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
