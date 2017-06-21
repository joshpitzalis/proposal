import React from "react"
import PropTypes from "prop-types"
import signature from "../images/signature.png"

const Signature = ({ author, designation, contact }) =>
  <div className="center measure-wide f5 pt5 lh-copy ph2">

    <img src={signature} />

    <p>
      <big>{author}</big>
      <div>{designation}</div>
      <div>{contact}</div>
    </p>

  </div>

Signature.propTypes = {
  title: PropTypes.string.isRequired
}

export default Signature
