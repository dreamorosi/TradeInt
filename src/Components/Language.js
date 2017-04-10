import React from 'react'
import styled from 'styled-components'

import Head from '../Primitives/Head'

const Language = styled.div`
  height: 30px;
`

export default (props) => {
  const decideActive = (code) => props.lang === code

  return (
    <Language>
      <Head active={decideActive('en')} onClick={props.handleClick}>EN</Head> <Head>/</Head> <Head active={decideActive('es')} onClick={props.handleClick}>ES</Head>
    </Language>
  )
}
