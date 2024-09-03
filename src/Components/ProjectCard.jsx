import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white text-black">
    <img className="w-full h-48 object-cover object-center" src={props.image_url} alt={props.name} />
    <div className="px-4 py-3">
      <div className="font-bold text-lg mb-2">{props.name}</div>
      <p className="text-gray-700 text-sm line-clamp-3">
        {props.description}
      </p>
    </div>
    <div className="px-4 pt-3 pb-2 flex justify-between items-center">
      <a href={props.preview_url} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-blue-500 hover:text-blue-700 text-sm">
        <i className="fas fa-link mr-1"></i>
        Preview
      </a>
      <a href={props.code_url} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-gray-800 hover:text-gray-900 text-sm">
        <i className="fab fa-github mr-1"></i>
        Code
      </a>
    </div>
  </div>
  )
}

export default ProjectCard