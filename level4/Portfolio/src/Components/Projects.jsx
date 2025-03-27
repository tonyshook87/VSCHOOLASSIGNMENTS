import React from 'react'
import Card from './Card'


export default function Projects() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-screen bg-gray-900 items-center justify-center flex-grow">
        <div className="grid gap-4 max-w-6xl mx-auto p-4">
          <Card
            imageUrl="https://picsum.photos/seed/59/300/200"
            title="Project 1"
            techStack= {["axios", "CSS", "React"]}
            projectUrl=""
            githubUrl=""
          />
          <Card
            imageUrl="https://picsum.photos/seed/60/300/200"
            title="Project 2"
            techStack= {["mongodb", "CSS", "Node.js", "React","Mongoose "]}
            projectUrl=""
            githubUrl=""
          />
          <Card
            imageUrl="https://picsum.photos/seed/60/300/200"
            title="Project 3"
            techStack= {["mongodb", "CSS", "Node.js", "React","Mongoose "]}
            projectUrl=""
            githubUrl=""
          />
         <Card
            imageUrl="https://picsum.photos/seed/60/300/200"
            title="Project 4"
            techStack= {["mongodb", "CSS", "Node.js", "React","Mongoose "]}
            projectUrl=""
            githubUrl=""
          />

        </div>
      </div>
    </div>
  );
}