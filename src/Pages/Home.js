import React, { Component } from 'react'
import Header from '../components/Header'

class Home extends Component {
  render() {
    return (
      
      <Header />
      

      <div>
        <link to="/FooFighters">Foo Fighters</link>
        <link to="/Shinedown">Shinedown</link>
        <link to='/BreakingBenjamin'>Breaking Benjamin</link>
      </div>
    )
  }
}

export default Home
