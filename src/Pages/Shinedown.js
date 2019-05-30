import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Shinedown extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Shinedown</h1>
        <img src="../images/Shinedown.jpg" />
        <p>Latest album</p>
        <p>Attention Attention-released May 4, 2018</p>
        <p>Current Members</p>
        <ul>
          <li>Brent Smith</li>
          <li>Barry Kerch</li>
          <li>Zach Myers</li>
          <li>Eric Bass</li>
        </ul>

        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default Shinedown
