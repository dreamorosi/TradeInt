import styled from 'styled-components'

export default styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: ${props => props.align !== undefined ? `flex-${props.align}` : 'center'}
  width: ${props => props.width !== undefined ? props.width : '100%'};
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 420px) {
    display: block;
    width: 100%;
    text-align: center;
    margin: 0 !important;
  }
`
