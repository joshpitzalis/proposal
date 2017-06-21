import React from 'react'
import PropTypes from 'prop-types'

const PricingTable = ({ title }) =>
  <div className="pa4 ">
    <div className="overflow-auto">
      <table className="f6 w-100 mw8 center" cellspacing="0">
        <thead>
          <tr>
            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white" />
            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">8 Weeks</th>
            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">1 Month</th>
            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">10 days</th>
          </tr>
        </thead>
        <tbody className="lh-copy">

          <tr>
            <td className="pv3 pr3 bb b--black-20">Design</td>
            <td className="pv3 pr3 bb b--black-20">.5x</td>
            <td className="pv3 pr3 bb b--black-20">x</td>
            <td className="pv3 pr3 bb b--black-20">2x</td>
          </tr>
          <tr>
            <td className="pv3 pr3 bb b--black-20">Development</td>
            <td className="pv3 pr3 bb b--black-20">.5x</td>
            <td className="pv3 pr3 bb b--black-20">x</td>
            <td className="pv3 pr3 bb b--black-20">2x</td>
          </tr>
          <tr>
            <td className="pv3 pr3 bb b--black-20">Copywriting</td>
            <td className="pv3 pr3 bb b--black-20">.5x</td>
            <td className="pv3 pr3 bb b--black-20">x</td>
            <td className="pv3 pr3 bb b--black-20">2x</td>
          </tr>
          <tr>
            <td className="pv3 pr3 bb b--black-20">Setup</td>
            <td className="pv3 pr3 bb b--black-20">.5x</td>
            <td className="pv3 pr3 bb b--black-20">x</td>
            <td className="pv3 pr3 bb b--black-20">2x</td>
          </tr>
          <tr>
            <td className="pv3 pr3 bb b--black-20">TOTAL</td>
            <td className="pv3 pr3 bb b--black-20">.5x</td>
            <td className="pv3 pr3 bb b--black-20">x</td>
            <td className="pv3 pr3 bb b--black-20">2x</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

PricingTable.propTypes = {
  title: PropTypes.string.isRequired
}

export default PricingTable
