import React, {useContext} from 'react'
import { ThemeContext } from './ThemeProvider'

export default function Main() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className={` maindiv ${theme}`}>
      <h1>Main Content</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
