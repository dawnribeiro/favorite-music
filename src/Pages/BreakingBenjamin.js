import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class BreakingBenjamin extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Breaking Benjamin</h1>
        <p>about</p>
        <p>albums</p>
        <p>members</p>
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default BreakingBenjamin
