import React from 'react'
import styled from 'styled-components'

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
      <Button onClick={handleClick}>Subscribe</Button>
    </Hero>
  )
}
