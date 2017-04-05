import styled from 'styled-components'

export default styled.span`
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  color: #FFF;
  font-size: 14px;
  transition: opacity 150ms ease-in-out;
  cursor: pointer;
  line-height: 14px;
  letter-spacing: 0.05;
  padding: 0 0 2px 0;
  border-bottom: ${props => props.active ? '1px solid #FFF' : 'none'};
  opacity: ${props => props.active ? '1' : '.5'};
`
