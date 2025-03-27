import { Link } from "react-router-dom";
import React from 'react'



export default function Home() {
    return (
      <div className="h-screen bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center">
        <div className="container lg:max-w-6xl min-h-lvh xl:w-3/7 sm:w-full md:w-2/3 bg-darkblue shadow-lg transform duration-200 easy-in-out">
          <div className="h-32 overflow-hidden">
            <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
          </div>
          <div className="flex justify-center px-5 -mt-12">
            <img className="h-72 w-72 bg-white p-2 rounded-full" src="https://media.licdn.com/dms/image/v2/D5603AQHyT4toY19iDg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726344436989?e=1731542400&v=beta&t=RRAKO-0e9xhx03FGyJI4-d0gIXC3fek9eZi38Rghv7M" alt="Profile Image" />
          </div>
          <div className="">
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-3xl font-bold">Anthony Shook</h2>
              <p className="text-gray-400 mt-2 hover:text-blue-500">Full-Stack Web Developer | Passionate about crafting user-friendly experiences.</p> 
              <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.linkedin.com/in/anthony-shook-64b066327/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              <p className="mt-2 text-gray-500 text-sm">Hi, my name is Anthony Shook </p>
            </div>
            <hr className="mt-6" />
            <div className="text-center px-14 mt-6"> 
              <p className="text-gray-400 text-sm">Skills: React, Node.js, Tailwind CSS</p>
            </div>
            <div className="flex justify-center mt-8 mb-6"> 
              <Link to="/projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                View Portfolio
              </Link>
              <Link to="/contact" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }