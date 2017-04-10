import styled from 'styled-components'

export default styled.p`
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  color: #FFF;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 0;
  margin: ${props => props.margin !== undefined ? props.margin + 'px' : '15px'} 10px 0 10px;
`
