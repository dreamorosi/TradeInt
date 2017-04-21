import React from 'react'
import styled from 'styled-components'
import AnimateNumber from 'react-animate-number'

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

export default (props) => {
  const isInfinite = () => props.number === '∞'

  const renderNumber = () => {
    if (props.number === '∞') {
      return props.number
    } else if (props.number > 1000) {
      return <AnimateNumber number={props.number} speed={100} step={100} />
    } else {
      return <AnimateNumber number={props.number} speed={10} />
    }
  }

  return (
    <Stat>
      <TitleNumber infinite={isInfinite()}>
        {renderNumber()}
      </TitleNumber>
      <TitleSmall>{props.title}</TitleSmall>
      <ParagraphSmall>
        {props.text.split('~').map((bit, key) => <span key={key}>{bit}<br /></span>)}
      </ParagraphSmall>
    </Stat>
  )
}
