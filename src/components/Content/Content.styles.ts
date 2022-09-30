import styled from 'styled-components'

export const ContantContainer = styled.main`
  background-color: ${(props => props.theme.content)};
  margin: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  min-height: 45rem; 
`;