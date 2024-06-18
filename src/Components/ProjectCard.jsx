import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="max-w- rounded-lg overflow-hidden shadow-lg bg-white text-black">
    <img className="w-full object-cover object-center" src={props.image_url} alt={props.name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{props.name}</div>
      <p className="text-gray-700 text-base line-clamp-4 md:line-clamp-">
        {props.description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2 flex justify-between items-center">
      <a href={props.preview_url} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-blue-500 hover:text-blue-700">
        <i className="fas fa-link mr-2"></i>
        Preview
      </a>
      <a href={props.code_url} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-gray-800 hover:text-gray-900 ">
        <i className="fab fa-github mr-2"></i>
        Code
      </a>
    </div>
  </div>
  )
}

export default ProjectCard