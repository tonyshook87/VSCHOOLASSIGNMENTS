import React from 'react';


export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col md:flex-row"> 
        <div className="md:w-1/3 mb-4 md:mb-0"> 
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHyT4toY19iDg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726344436989?e=1731542400&v=beta&t=RRAKO-0e9xhx03FGyJI4-d0gIXC3fek9eZi38Rghv7M"
            alt="Profile"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 md:pl-8"> 
          <p className="text-gray-500 mb-4">
            Hi, I'm Anthony! I'm a passionate web developer with a focus on creating beautiful and functional user experiences. I enjoy tackling challenging problems and learning new technologies.
            
          </p>
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-300 text-xs bg-gray-700 px-2 py-1 rounded-full">React</span>
            <span className="text-gray-300 text-xs bg-gray-700 px-2 py-1 rounded-full">Node.js</span>
            <span className="text-gray-300 text-xs bg-gray-700 px-2 py-1 rounded-full">Tailwind CSS</span>
            <span className="text-gray-300 text-xs bg-gray-700 px-2 py-1 rounded-full">Mongoose</span>
            <span className="text-gray-300 text-xs bg-gray-700 px-2 py-1 rounded-full">mongodb</span>
            <span className="text-gray-300 text-xs bg-gray-700 px-2 py-1 rounded-full">Express</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
