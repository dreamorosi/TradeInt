import React from 'react'
import styled from 'styled-components'

import Header from '../Primitives/Header'
import SubHeader from '../Primitives/SubHeader'
import Button from '../Primitives/Button'
import Scroll from 'react-scroll'
const scroll = Scroll.animateScroll

const Hero = styled.div`
  & button {
    @media (max-width: 800px) {
      margin-bottom: 50px;
    }
  }
`

export default (props) => {
  const handleClick = () => scroll.scrollToBottom()

  return (
    <Hero>
      <Header>{props.header}</Header>
      <SubHeader>{props.subheader.split('~').map((bit, key) => <span key={key}>{bit}<br /></span>)}</SubHeader>
      <Button onClick={handleClick}>{props.button}</Button>
    </Hero>
  )
}
