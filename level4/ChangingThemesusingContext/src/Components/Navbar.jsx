import React, {useContext} from 'react'
import { ThemeContext } from './ThemeProvider'


export default function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <nav className={` nav ${theme}`}>
      <ul>
        <li>Home</li>
        <li>Middle</li>
        <li>End</li>
        </ul>
    </nav>
  )
}
