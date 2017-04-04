import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: #525252;
  text-align: center;
`

class Home extends React.Component {
  render () {
    const { text } = this.props
    return (
      <Title>{text}</Title>
    )
  }
}

Home.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default Home
