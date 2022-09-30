import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme['text-color']};
    font-family: sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }
`;