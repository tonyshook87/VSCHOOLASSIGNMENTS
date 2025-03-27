import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <nav className='nav'>
          <Link className='navlink' to="/">Home</Link>
          <Link className='navlink about' to="/about">About</Link>
          <Link className='navlink' to="/create">Add movie</Link>
          <Link className='navlink' to="/watched">Watched</Link>
          <Link className='navlink' to="/watchlist">Watchlist</Link>
        </nav>
    </div>
  )
}
