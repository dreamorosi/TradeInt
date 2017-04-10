import styled from 'styled-components'

export default styled.section`
  flex-grow: 1;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: ${props => props.padding !== undefined ? props.padding : '0'};
  @media (max-width: 420px) {
    display: block;
  }
`
