import styled from 'styled-components'

export default styled.span`
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  color: #FFF;
  font-size: 14px;
  line-height: 14px;
  padding: 0 0 4px 0;
  cursor: ${props => props.mail ? 'pointer' : 'default'};
`
