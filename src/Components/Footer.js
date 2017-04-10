import styled from 'styled-components'

import Email from '../images/Email.svg'

export default styled.span`
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  color: #FFF;
  font-size: 14px;
  line-height: 14px;
  cursor: ${props => props.mail ? 'pointer' : 'default'};
  &::before {
    content: '';
    width: 25px;
    height: 18px;
    display: ${props => props.mail ? 'inline-block' : 'none'};
    padding: 0 5px 0 0;
    position: relative;
    top: 3px;
    right: 15px;
    background: url(${Email}) no-repeat;
  }
`
