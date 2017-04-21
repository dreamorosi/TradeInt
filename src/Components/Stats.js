import React, { Component } from 'react'
import styled from 'styled-components'
import AnimateNumber from 'react-animate-number'
import VisibilitySensor from 'react-visibility-sensor'

import TitleNumber from '../Primitives/TitleNumber'
import TitleSmall from '../Primitives/TitleSmall'
import ParagraphSmall from '../Primitives/ParagraphSmall'

const Stat = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    margin-top: 50px;
  }
`

class Stats extends Component {
  constructor () {
    super()

    this.state = {
      isVisible: false,
      hasShown: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.isInfinite = this.isInfinite.bind(this)
    this.renderNumber = this.renderNumber.bind(this)
  }

  handleScroll (isVisible) {
    if (isVisible && !this.state.hasShown) {
      this.setState({
        isVisible: true,
        hasShown: true
      })
    }
  }

  isInfinite () {
    return this.props.number === '∞'
  }

  renderNumber () {
    if (this.state.isVisible) {
      if (this.props.number === '∞') {
        return this.props.number
      } else if (this.props.number > 1000) {
        return <AnimateNumber number={this.props.number} speed={100} step={100} />
      } else {
        return <AnimateNumber number={this.props.number} speed={10} />
      }
    }
  }

  render () {
    return (
      <Stat>
        <VisibilitySensor onChange={this.handleScroll}>
          <TitleNumber infinite={this.isInfinite()}>
            {this.renderNumber()}
          </TitleNumber>
        </VisibilitySensor>
        <TitleSmall>{this.props.title}</TitleSmall>
        <ParagraphSmall>
          {this.props.text.split('~').map((bit, key) => <span key={key}>{bit}<br /></span>)}
        </ParagraphSmall>
      </Stat>
    )
  }
}

export default Stats
