import { Header } from "./components/Header/Header"
import { ThemeProvider } from 'styled-components'
import { lightTheme } from "./styles/themes/lightTheme"
import { useState } from "react";
import { darkTheme } from "./styles/themes/darkTheme";
import { GlobalStyle } from "./styles/global";
import { Content } from "./components/Content/Content";

function App() {

  const [isDarkTheme, setIsDarkTheme] =  useState<boolean>(false);

  function handleChangeTheme(){    
    setIsDarkTheme((theme) => !theme);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Header 
        onChangeTheme={handleChangeTheme}
        isDarkTheme={isDarkTheme}
      />
      <Content />
      
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
