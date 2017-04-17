import React, { Component } from 'react'
import styled from 'styled-components'
import LocalizedStrings from 'react-localization'
import ScrollAnim from 'rc-scroll-anim'
const ScrollOverPack = ScrollAnim.OverPack
import QueueAnim from 'rc-queue-anim'
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
        <Row padding='50px 0 0 0' style={{minHeight: 588 + 'px'}}>
          <Col width='66%' align='start'>
            <QueueAnim>
              <Hero header={hero.header} subheader={hero.subheader} key='1' />
            </QueueAnim>
          </Col>
          <Col width='33%'>
            <QueueAnim delay='200'>
              <Phone src={PhoneSrc} alt='Mobile Screen' key='1' />
            </QueueAnim>
          </Col>
        </Row>
        <Row padding='150px 0 60px 0' style={{minHeight: 302 + 'px'}}>
          <Col>
            <ScrollOverPack playScale='50vh'>
              <QueueAnim key='0'>
                <Heading title={headings[0].title} subtitle={headings[0].subtitle} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
        <Row style={{minHeight: 193 + 'px'}}>
          <Col width='33%'>
            <ScrollOverPack playScale='25vh'>
              <QueueAnim key='0'>
                <Why title={why[0].title} text={why[0].text} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
          <Col width='33%'>
            <ScrollOverPack playScale='25vh'>
              <QueueAnim delay='200' key='0'>
                <Why title={why[1].title} text={why[1].text} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
          <Col width='33%'>
            <ScrollOverPack playScale='25vh'>
              <QueueAnim delay='300' key='0' onEnd={() => console.log('view')}>
                <Why title={why[2].title} text={why[2].text} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
        <Row padding='200px 0 75px 0' style={{minHeight: 367 + 'px'}}>
          <Col>
            <ScrollOverPack playScale='50vh'>
              <QueueAnim key='0'>
                <Heading title={headings[1].title} subtitle={headings[1].subtitle} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
        <Row style={{minHeight: 520 + 'px'}}>
          <Test>
            <ScrollOverPack playScale='50vh'>
              <QueueAnim key='0'>
                <Slider key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Test>
        </Row>
        <Row padding='150px 0 90px 0' style={{minHeight: 332 + 'px'}}>
          <Col>
            <ScrollOverPack playScale='50vh'>
              <QueueAnim key='0'>
                <Heading title={headings[2].title} subtitle={headings[2].subtitle} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
        <Row style={{minHeight: 259 + 'px'}}>
          <Col width='33%'>
            <ScrollOverPack playScale='25vh' style={{width: 100 + '%'}}>
              <QueueAnim key='0'>
                <Card title={cards[0].title} text={cards[0].text} position={1} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
          <Col width='33%'>
            <ScrollOverPack playScale='25vh' style={{width: 100 + '%'}}>
              <QueueAnim key='0' delay='200'>
                <Card title={cards[1].title} text={cards[1].text} position={2} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
          <Col width='33%'>
            <ScrollOverPack playScale='25vh' style={{width: 100 + '%'}}>
              <QueueAnim key='0' delay='300'>
                <Card title={cards[2].title} text={cards[2].text} position={3} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
        <Row padding='180px 0 0 0' style={{minHeight: 334 + 'px'}}>
          <Col width='25%'>
            <ScrollOverPack playScale='25vh'>
              <QueueAnim key='0'>
                <Stats number={stats[0].number} title={stats[0].title} text={stats[0].text} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
          <Col width='25%'>
            <ScrollOverPack playScale='25vh'>
              <QueueAnim key='0' delay='200'>
                <Stats number={stats[1].number} title={stats[1].title} text={stats[1].text} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
          <Col width='25%'>
            <ScrollOverPack playScale='25vh'>
              <QueueAnim key='0' delay='300'>
                <Stats number={stats[2].number} title={stats[2].title} text={stats[2].text} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
          <Col width='25%'>
            <ScrollOverPack playScale='25vh'>
              <QueueAnim key='0' delay='400'>
                <Stats number={stats[3].number} title={stats[3].title} text={stats[3].text} infinite key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
        <Row padding='200px 0 0 0' style={{minHeight: 292 + 'px'}}>
          <Col>
            <ScrollOverPack playScale='25vh'>
              <QueueAnim key='0'>
                <Heading title={headings[3].title} subtitle={headings[3].subtitle} key='1' />
              </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
        {/* Signup Form */}
        <Row padding='70px 0 0 0'>
          <Col id='signup'>
            <ScrollOverPack playScale='25vh'>
              <QueueAnim key='0'>
                <small key='1'>I'm a div</small>
              </QueueAnim>
            </ScrollOverPack>
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
