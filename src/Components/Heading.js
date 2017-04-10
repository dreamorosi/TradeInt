import React from 'react'
import styled from 'styled-components'

import Title from '../Primitives/Title'
import Subtitle from '../Primitives/Subtitle'

const Heading = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default (props) => {
  return (
    <Heading>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Heading>
  )
}
