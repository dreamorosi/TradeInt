import React from 'react'
import styled from 'styled-components'

import TitleNumber from '../Primitives/TitleNumber'
import TitleSmall from '../Primitives/TitleSmall'
import ParagraphSmall from '../Primitives/ParagraphSmall'

const Stat = styled.div`
  width: 275px;
  flex-grow: 1;
`

export default (props) => {
  return (
    <Stat>
      <TitleNumber>{props.number}</TitleNumber>
      <TitleSmall>{props.title}</TitleSmall>
      <ParagraphSmall>{props.text}</ParagraphSmall>
    </Stat>
  )
}
