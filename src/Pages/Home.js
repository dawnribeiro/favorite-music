import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

class Home extends Component {
  render() {
    return (
      <section className="band-container">
        <Header />

        <Link to="/FooFighters">Foo Fighters</Link>
        <p>
          Foo Fighters is an American rock band, formed in Seattle, Washington,
          in 1994. It was founded by Nirvana drummer Dave Grohl as a one-man
          project following the dissolution of Nirvana after the suicide of Kurt
          Cobain. The group got its name from the UFOs and various aerial
          phenomena that were reported by Allied aircraft pilots in World War
          II, which were known collectively as "foo fighters".
        </p>
        <Link to="/Shinedown">Shinedown</Link>
        <p>
          Shinedown is an American rock band from Jacksonville, Florida formed
          by singer Brent Smith in 2001 after the dissolution of his previous
          band. Smith, still under contract with record label Atlantic Records,
          recruited the band's original lineup of Jasin Todd as guitarist, Brad
          Stewart on bass, and Barry Kerch on drums. Consistent for the first
          two album cycles, a few lineup changes followed in the late 2000s,
          eventually stabilizing with Smith and Kerch alongside Zach Myers on
          guitar and Eric Bass on bass. The group has released six studio
          albums: Leave a Whisper (2003), Us and Them (2005), The Sound of
          Madness (2008), Amaryllis (2012), Threat to Survival (2015), and
          Attention Attention (2018).
        </p>
        <Link to="/BreakingBenjamin">Breaking Benjamin</Link>
        <p>
          Breaking Benjamin is an American rock band from Wilkes-Barre,
          Pennsylvania, formed in 1999 by lead singer and guitarist Benjamin
          Burnley and drummer Jeremy Hummel. The first lineup of the band also
          included guitarist Aaron Fink and bassist Mark Klepaski. This lineup
          released two albums, Saturate (2002) and We Are Not Alone (2004),
          before Hummel was replaced by Chad Szeliga in 2005. The band released
          two more studio albums, Phobia (2006) and Dear Agony (2009), before
          entering an extended hiatus in early 2010 due to Burnley's recurring
          illnesses.
          <br />Despite significant lineup changes, the band's musical style and
          lyrical content have remained consistent, with Burnley serving as the
          primary composer and lead vocalist since the band's inception. The
          band has commonly been noted for its formulaic hard rock tendencies
          with angst-heavy lyrics, swelling choruses, and "crunching" guitars.
          In the United States alone, the band has sold more than 7 million
          units[1] and yielded three RIAA-certified platinum records, two gold
          records, and several certified singles, including two multi-platinum,
          two platinum, and five gold. The band has also produced one number one
          record on the Billboard 200.
        </p>
      </section>
    )
  }
}

export default Home
