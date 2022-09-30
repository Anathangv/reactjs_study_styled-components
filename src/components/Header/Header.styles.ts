import styled from 'styled-components'

export const HeaderConatainer = styled.header`  
  background-color: ${(props => props.theme.secundary)};
  padding: 1rem;
  display: flex;
  align-items: center;

  h1{
    color: ${(props => props.theme.white)};
    text-align: center;
    flex: 1 0 auto;
  }
`