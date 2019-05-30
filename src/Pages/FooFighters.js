import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FooFighters extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Foo Fighters</h1>
        <img src="../images/FooFighters.jpg" />
        <p>Latest Album</p>
        <p>Concrete and Gold-September 15, 2017</p>
        <p>members</p>
        <ul>
          <li>Dave Grohl</li>
          <li>Nate Mendel</li>
          <li>Pat Smear</li>
          <li>Taylor Hawkins</li>
          <li>Chris Shiflett</li>
          <li>Rami Jaffee</li>
        </ul>

        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default FooFighters
