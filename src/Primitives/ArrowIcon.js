import styled from 'styled-components'

import Arrow from '../images/Arr-circle.svg'

export default styled.div`
  background: url(${Arrow}) no-repeat;
  width: 80px;
  height: 80px;
  transform: rotate(${props => props.right !== undefined ? '180deg' : '0deg'});
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`
