import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class BreakingBenjamin extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Breaking Benjamin</h1>
        <img src="../images/BreakingBenjamin.jpg" />
        <p>Latest Album</p>
        <p>Ember-April 13, 2018</p>
        <p>members</p>
        <ul>
          <li>Benjamin Burnley</li>
          <li>Aaron Bruch</li>
          <li>Shaun Foist</li>
          <li>Jasen Rauch</li>
          <li>Keith Wallen</li>
        </ul>
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default BreakingBenjamin
