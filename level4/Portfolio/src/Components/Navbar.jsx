import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
   
<nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
				<Link to="/"  className="md:px-4 md:py-2 text-indigo-500">Home</Link>
				<Link to="/projects"className="md:px-4 md:py-2 hover:text-indigo-400">Projects</Link>
				<Link to="/resume"className="md:px-4 md:py-2 hover:text-indigo-400">Resume</Link>
				<Link to="/about"className="md:px-4 md:py-2 hover:text-indigo-400">About</Link>
				<Link to="/contact"className="md:px-4 md:py-2 hover:text-indigo-400">Contact</Link>
			</ul>
		</div>
		
	</div>
</nav>
    </div>
  )
}
