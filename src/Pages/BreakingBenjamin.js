import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BB from '../images/BreakingBenjamin.jpg'

class BreakingBenjamin extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Breaking Benjamin</h1>
        <img src={BB} />
        <h3>Latest Album</h3>
        <p>
          <strong>Ember</strong>-April 13, 2018
        </p>
        <h3>Current Members</h3>
        <ul>
          <li>Benjamin Burnley</li>
          <li>Aaron Bruch</li>
          <li>Shaun Foist</li>
          <li>Jasen Rauch</li>
          <li>Keith Wallen</li>
        </ul>
        <Link to="/">Go Home</Link>
      </div>
    )
  }
}

export default BreakingBenjamin
