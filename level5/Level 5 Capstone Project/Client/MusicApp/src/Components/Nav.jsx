import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
  return (
    <nav className='navbar'>
    

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
        
        </ul>
         
    </nav>
  )
}
