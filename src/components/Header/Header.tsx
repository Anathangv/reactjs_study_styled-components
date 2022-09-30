import { ButtonTheme } from '../ThemeButton/ThemeButton'
import { HeaderConatainer } from './Header.styles'

interface IHeaderProps{
  isDarkTheme: boolean,
  onChangeTheme: () => void,
}

export function Header({isDarkTheme, onChangeTheme}: IHeaderProps){
  return(
    <HeaderConatainer>
      <h1>Styled components study</h1>
      <ButtonTheme 
        isDarkTheme={isDarkTheme}
        onChangeTheme={onChangeTheme}
      />
    </HeaderConatainer>
  )
}