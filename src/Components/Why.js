import React from 'react'
import styled from 'styled-components'

import WhySrc from '../images/Why.svg'
import WhyIcon from '../Primitives/WhyIcon'
import TitleSmall from '../Primitives/TitleSmall'
import ParagraphSmall from '../Primitives/ParagraphSmall'

const Why = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default (props) => {
  return (
    <Why>
      <WhyIcon src={WhySrc} alt='Why TradeInt' />
      <TitleSmall>
        {props.title.split('~').map((bit, key) => <span key={key}>{bit}<br /></span>)}
      </TitleSmall>
      <ParagraphSmall margin='25'>
        {props.text.split('~').map((bit, key) => <span key={key}>{bit}<br /></span>)}
      </ParagraphSmall>
    </Why>
  )
}
