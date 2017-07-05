import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ backgroundURL, date, type, client, heading }) =>
  <div
    className="vh-100 dt w-100 tc bg-dark-gray white cover athelas"
    style={{
      backgroundColor: `#C2CDB7`
    }}>
    <div className="dtc v-mid">
      <header className="white-70">
        <h2 className="f6 fw1 ttu tracked mb2 lh-title">{date}</h2>
        <h3 className="f6 fw1 lh-title" />
      </header>
      <h1 className="f1 f-headline-l fw1 i white-60">{heading}</h1>
      <blockquote className="ph0 mh0 measure f4 lh-copy center">
        <p className="fw1 white-70">
          {type}
        </p>
        <cite className="f6 ttu tracked fs-normal">For {client}</cite>
      </blockquote>
    </div>
  </div>

Header.propTypes = {
  backgroundURL: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired
}

export default Header
