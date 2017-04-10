import React from 'react'
import styled from 'styled-components'

import TitleSmall from '../Primitives/TitleSmall'
import ParagraphSmall from '../Primitives/ParagraphSmall'

const Card = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const Box = styled.div`
  border: 1px solid #F9A076;
  border-radius: 10px;
  padding: 50px 0;
  width: 100%;
`

export default (props) => {
  return (
    <Card>
      <Box>
        <TitleSmall>{props.title}</TitleSmall>
        <ParagraphSmall margin='25'>
          {props.text.split('~').map((bit, key) => <span key={key}>{bit}<br /></span>)}
        </ParagraphSmall>
      </Box>
    </Card>
  )
}
