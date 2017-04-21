import React, { Component } from 'react'
import styled from 'styled-components'

import ArrowIcon from '../Primitives/ArrowIcon'
import Browser from '../images/Browser1.png'
import Browser2 from '../images/Browser2.png'

const SliderContainer = styled.div`
  height: 520px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  @media (max-width: 800px) {
    height: auto
  }
`

const SliderContent = styled.div`
  width: 835px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 800px) {
    width: 300px
  }
`

const SliderControl = styled.div`
  z-index: 99;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    display: none
  }
`

const SliderDeck = styled.ul`
  position: relative;
  left: ${props => props.left};
  transition: 0.5s left;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 1670px;
  @media (max-width: 800px) {
    width: 1200px;
  }
  overflow-x: hidden;
`

const Slide = styled.li`
  display: inline-block;
  width: 835px;
  @media (max-width: 800px) {
    width: 300px
  }
  height: auto;
  & > img {
    width: 835px;
    display: ${props => props.current ? 'block' : 'none'};
    margin: 0 auto;
    @media (max-width: 800px) {
      width: 300px
    }
  }
`

class Slider extends Component {
  constructor () {
    super()

    this.state = {
      currentIndex: 0,
      leftPos: 0
    }

    this.goToPrev = this.goToPrev.bind(this)
    this.goToNext = this.goToNext.bind(this)
  }

  goTo (index) {
    // filter invalid indexes
    if (index < 0) {
      return
    } else if (index > 1) {
      index = 0
    }
    this.setState({
      currentIndex: index,
      leftPos: `-${(100 * index)}%`
    })
  }

  goToPrev () {
    this.goTo(this.state.currentIndex - 1)
  }

  goToNext () {
    this.goTo(this.state.currentIndex + 1)
  }

  render () {
    let slides = [Browser, Browser2]
    return (
      <SliderContainer>
        <SliderControl>
          <ArrowIcon onClick={this.goToPrev} />
        </SliderControl>
        <SliderContent>
          <SliderDeck left={this.state.leftPos}>
            {
              slides.map((slide, i) => {
                return (
                  <Slide key={i} current={i === this.state.currentIndex}>
                    <img src={slide} alt='Prototype' />
                  </Slide>
                )
              })
            }
          </SliderDeck>
        </SliderContent>
        <SliderControl>
          <ArrowIcon onClick={this.goToNext} right />
        </SliderControl>
      </SliderContainer>
    )
  }
}

export default Slider
