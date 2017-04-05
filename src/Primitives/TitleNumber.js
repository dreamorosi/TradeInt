import styled from 'styled-components'

export default styled.h4`
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  color: #F9A076;
  font-size: ${props => props.infinite ? '64px' : '48px'};
  letter-spacing: -0.4;
  text-align: center;
  padding: 0;
  margin: 0;
`
