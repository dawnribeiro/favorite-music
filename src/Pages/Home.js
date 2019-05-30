import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

class Home extends Component {
  render() {
    return (
      <section className="band-container">
        <Header />

        <Link to="/FooFighters">Foo Fighters</Link>
        <Link to="/Shinedown">Shinedown</Link>
        <Link to="/BreakingBenjamin">Breaking Benjamin</Link>
      </section>
    )
  }
}

export default Home
