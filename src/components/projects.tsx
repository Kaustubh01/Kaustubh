import React from 'react'
import { Card } from './ui/card'
import ProjectCard from './myCard'

const Projects = () => {
  return (
    <div className='project flex flex-col'>
        <h1>Projects</h1>
        <div className='grid grid-cols-3 m-3'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            
        </div>
    </div>
  )
}

export default Projects