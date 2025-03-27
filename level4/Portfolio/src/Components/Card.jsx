import React from 'react'


export default function Card({ imageUrl, title, description, techStack, projectUrl, githubUrl }) {
    return (
      <div className="w-full flex flex-col bg-gray-800 rounded-lg shadow-md">
        <div className="relative">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer"> {/* Open project link in new tab */}
            <img src={imageUrl} alt={title} className="w-full h-auto rounded-t-lg object-cover" />
          </a>
        </div>
        <div className="flex flex-col mt-2 p-4">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="text-gray-100 text-lg font-semibold">{title}</h3>
          </a>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
          <div className="flex flex-wrap mt-2 gap-2"> {/* Use flex-wrap to handle overflow */}
            {techStack.map((tech, index) => (
              <span key={index} className="text-gray-300 text-xs bg-gray-700 px-2 py-1 rounded-full">{tech}</span>
            ))}
          </div>
          <div className="flex mt-4 justify-end"> {/* Align buttons to the right */}
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              View Project
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
              GitHub
            </a>
          </div>
        </div>
      </div>
)}