import React from 'react'
import styled from 'styled-components'
import ScrollAnim from 'rc-scroll-anim'
const Link = ScrollAnim.Link

import Header from '../Primitives/Header'
import SubHeader from '../Primitives/SubHeader'
import Button from '../Primitives/Button'

const Hero = styled.div`
`

export default (props) => {
  let handleClick = (e) => console.log(e)

  return (
    <Hero>
      <Header>{props.header}</Header>
      <SubHeader>{props.subheader.split('~').map((bit, key) => <span key={key}>{bit}<br /></span>)}</SubHeader>
      <Link to='signup' duration={1500}>
        <Button onClick={handleClick}>{props.button}</Button>
      </Link>
    </Hero>
  )
}
