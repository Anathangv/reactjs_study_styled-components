import { Moon, Sun } from "phosphor-react";
import { ButtonContainer } from "./ThemeButton.styles";

interface IButtonThemeProps{
  isDarkTheme: boolean,
  onChangeTheme: () => void
}


export function ButtonTheme({isDarkTheme, onChangeTheme}:IButtonThemeProps){
  return (
    <ButtonContainer onClick={onChangeTheme}>
      {isDarkTheme ?
        <Sun size={32} weight="light" />
      :
        <Moon size={32} weight="light" />
      }
    </ButtonContainer> 
  )
}