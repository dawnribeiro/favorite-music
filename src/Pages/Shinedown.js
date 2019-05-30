import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SD from '../images/Shinedown.jpg'

class Shinedown extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Shinedown</h1>
        <img src={SD} />
        <h3>Latest Album</h3>
        <p>
          <strong>Attention Attention</strong>-released May 4, 2018
        </p>
        <h3>Current Members</h3>
        <ul>
          <li>Brent Smith</li>
          <li>Barry Kerch</li>
          <li>Zach Myers</li>
          <li>Eric Bass</li>
        </ul>

        <Link to="/">Go Home</Link>
      </div>
    )
  }
}

export default Shinedown
