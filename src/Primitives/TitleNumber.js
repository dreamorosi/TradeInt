import styled from 'styled-components'

export default styled.h4`
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  color: #F9A076;
  font-size: ${props => props.infinite ? '64px' : '48px'};
  line-height: ${props => props.infinite ? '55px' : ''};
  letter-spacing: 0.4px;
  text-align: center;
  padding: 0;
  margin: 0 0 20px 0;
`
