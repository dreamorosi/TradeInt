import React from 'react'
import { storiesOf } from '@kadira/storybook'
import styled from 'styled-components'

import Header from '../Primitives/Header'
import Head from '../Primitives/Head'
import Title from '../Primitives/Title'
import Subtitle from '../Primitives/Subtitle'
import TitleSmall from '../Primitives/TitleSmall'
import TitleNumber from '../Primitives/TitleNumber'
import ParagraphSmall from '../Primitives/ParagraphSmall'
import Footer from '../Primitives/Footer'
import Button from '../Primitives/Button'

import Stats from '../Components/Stats'

const Wrapper = styled.div`
  background-image: linear-gradient(-105deg, #1C407C 0%, #0C2444 62%);
  padding: 10px 20px;
`

storiesOf('Style Guide', module)
  .add('Header', () => (
    <Wrapper>
      <Header>The business network where<br />suppliers and distributors come together.</Header>
    </Wrapper>
  ))

storiesOf('Style Guide', module)
  .add('Head', () => (
    <Wrapper>
      <Head active>EN</Head> <Head>/ ES</Head>
    </Wrapper>
  ))

storiesOf('Style Guide', module)
  .add('Title', () => (
    <Wrapper>
      <Title>Why TradeInt?</Title>
    </Wrapper>
  ))

storiesOf('Style Guide', module)
  .add('Subtitle', () => (
    <Wrapper>
      <Subtitle>TradeInt joins international supply and demand between suppliers and distributors.</Subtitle>
    </Wrapper>
  ))

storiesOf('Style Guide', module)
  .add('Title Small', () => (
    <Wrapper>
      <TitleSmall>Find your ideal<br />business partner</TitleSmall>
    </Wrapper>
  ))

storiesOf('Style Guide', module)
  .add('Paragraph Small', () => (
    <Wrapper>
      <ParagraphSmall>Identify and communicate with fitting<br />partners through our business network.</ParagraphSmall>
    </Wrapper>
  ))

storiesOf('Style Guide', module)
  .add('Title Number', () => (
    <Wrapper>
      <TitleNumber>2500</TitleNumber>
      <TitleNumber infinite>∞</TitleNumber>
    </Wrapper>
  ))

storiesOf('Style Guide', module)
  .add('Footer', () => (
    <Wrapper>
      <Footer>Copyright © 2017 TradeInt / All rights reserved.</Footer>
      <br />
      <Footer mail>hello@tradeint.es</Footer>
    </Wrapper>
  ))

storiesOf('Style Guide', module)
  .add('Button', () => (
    <Wrapper>
      <Button>Subscribe</Button>
    </Wrapper>
  ))

storiesOf('Style Guide', module)
  .add('Stat', () => (
    <Wrapper>
      <Stats number={2500} title='Hours Worked' text='Thinking, designing and evaluating is always a challenge.' />
    </Wrapper>
  ))
