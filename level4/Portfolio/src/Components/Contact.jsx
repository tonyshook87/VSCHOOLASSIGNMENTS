import React from 'react';
export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-500 mb-4">
        I'm always open to discussing new opportunities and collaborations. Feel free to reach out to me directly at{" "}
        <a href="tonyshook87@gmail.com" className="text-blue-500 hover:underline">
          tonyshook87@gmail.com
        </a>
        .
      </p>
    <p className="text-gray-500 mb-4">You can also find me on <a href="https://www.linkedin.com/in/anthony-shook-64b066327/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>.</p>
    </div>
  );
}
