import React, { Component } from 'react'
import styled from 'styled-components'
import LocalizedStrings from 'react-localization'

import LogoSrc from './images/TradeInt-Logo.png'
import PhoneSrc from './images/iPhone-screen.png'

import content from './content.js'

import Row from './Primitives/Row'
import Col from './Primitives/Col'

import Logo from './Components/Logo'
import Language from './Components/Language'
import Hero from './Components/Hero'
import Phone from './Components/Phone'
import Heading from './Components/Heading'
import Why from './Components/Why'
import Slider from './Components/Slider'
import Card from './Components/Card'
import Stats from './Components/Stats'
import Copyright from './Components/Copyright'
import Mail from './Components/Mail'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1070px;
  margin: 0 auto;
  box-sizing: border-box;
`

const Test = styled.div`
  width: 100%
`

class App extends Component {
  constructor () {
    super()
    this.strings = new LocalizedStrings(content)
    this.state = {
      lang: 'en'
    }
    this.strings.setLanguage(this.state.lang)
    this.handleChangeLang = this.handleChangeLang.bind(this)
  }

  handleChangeLang (e) {
    let newLang = e.currentTarget.innerText.toLowerCase()
    this.strings.setLanguage(newLang)
    this.setState({
      lang: newLang
    })
  }

  render () {
    const { hero, headings, why, cards, stats, footer } = this.strings
    return (
      <Wrapper>
        <Row>
          <Col width='50%' align='start'>
            <Logo src={LogoSrc} alt='TradeInt Logo' />
          </Col>
          <Col width='50%' align='end'>
            <Language lang={this.state.lang} handleClick={this.handleChangeLang} />
          </Col>
        </Row>
        <Row padding='50px 0 0 0'>
          <Col width='66%' align='start'>
            <Hero header={hero.header} subheader={hero.subheader} />
          </Col>
          <Col width='33%'>
            <Phone src={PhoneSrc} alt='Mobile Screen' />
          </Col>
        </Row>
        <Row padding='150px 0 60px 0'>
          <Col>
            <Heading title={headings[0].title} subtitle={headings[0].subtitle} />
          </Col>
        </Row>
        <Row>
          <Col width='33%'>
            <Why title={why[0].title} text={why[0].text} />
          </Col>
          <Col width='33%'>
            <Why title={why[1].title} text={why[1].text} />
          </Col>
          <Col width='33%'>
            <Why title={why[2].title} text={why[2].text} />
          </Col>
        </Row>
        <Row padding='200px 0 75px 0'>
          <Col>
            <Heading title={headings[1].title} subtitle={headings[1].subtitle} />
          </Col>
        </Row>
        <Row>
          <Test>
            <Slider />
          </Test>
        </Row>
        <Row padding='150px 0 90px 0'>
          <Col>
            <Heading title={headings[2].title} subtitle={headings[2].subtitle} />
          </Col>
        </Row>
        <Row>
          <Col width='33%'>
            <Card title={cards[0].title} text={cards[0].text} position={1} />
          </Col>
          <Col width='33%'>
            <Card title={cards[1].title} text={cards[1].text} position={2} />
          </Col>
          <Col width='33%'>
            <Card title={cards[2].title} text={cards[2].text} position={3} />
          </Col>
        </Row>
        <Row padding='180px 0 0 0'>
          <Col width='25%'>
            <Stats number={stats[0].number} title={stats[0].title} text={stats[0].text} />
          </Col>
          <Col width='25%'>
            <Stats number={stats[1].number} title={stats[1].title} text={stats[1].text} />
          </Col>
          <Col width='25%'>
            <Stats number={stats[2].number} title={stats[2].title} text={stats[2].text} />
          </Col>
          <Col width='25%'>
            <Stats number={stats[3].number} title={stats[3].title} text={stats[3].text} infinite />
          </Col>
        </Row>
        <Row padding='200px 0 0 0'>
          <Col>
            <Heading title={headings[3].title} subtitle={headings[3].subtitle} />
          </Col>
        </Row>
        {/* Signup Form */}
        <Row padding='70px 0 0 0'>
          <Col>
            <small>I'm a div</small>
          </Col>
        </Row>
        <Row padding='160px 0 60px 0'>
          <Col width='50%' align='start'>
            <Copyright>{footer.copyright}</Copyright>
          </Col>
          <Col width='50%' align='end'>
            <Mail href={`mailto:${footer.mail}`}>{footer.mail}</Mail>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default App
