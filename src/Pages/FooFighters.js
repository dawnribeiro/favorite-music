import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FF from '../images/FooFighters.jpg'

class FooFighters extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Foo Fighters</h1>
        <img src={FF} />
        <h3>Latest Album</h3>
        <p>
          <strong>Concrete and Gold</strong>-September 15, 2017
        </p>
        <p>Current Members</p>
        <ul>
          <li>Dave Grohl</li>
          <li>Nate Mendel</li>
          <li>Pat Smear</li>
          <li>Taylor Hawkins</li>
          <li>Chris Shiflett</li>
          <li>Rami Jaffee</li>
        </ul>

        <Link to="/">Go Home</Link>
      </div>
    )
  }
}

export default FooFighters
