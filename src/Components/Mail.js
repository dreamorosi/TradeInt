import styled from 'styled-components'

import Email from '../images/Email.svg'

export default styled.a`
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  color: #FFF;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  text-decoration: none;
  &::before {
    content: '';
    width: 25px;
    height: 18px;
    display: inline-block;
    padding: 0 5px 0 0;
    position: relative;
    top: 3px;
    right: 15px;
    background: url(${Email}) no-repeat;
  }
`
