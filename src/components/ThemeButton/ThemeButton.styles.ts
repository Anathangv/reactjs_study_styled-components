import styled from 'styled-components'

export const ButtonContainer = styled.button`
  border: none;
  height: fit-content;
  border-radius: 50%;
  padding: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  
  svg{
    color: ${(props) => props.theme.white};
    transition: all .2s ease-in;

    &:hover{
      color: yellow;
      cursor: pointer;
    }
  }
`;
  