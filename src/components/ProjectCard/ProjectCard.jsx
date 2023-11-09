import React from 'react'
import { FaGithub } from "react-icons/fa";
import './ProjectCard.css'
export const ProjectCard = ({ props }) => {
    const { title, img, url, urlGit, subtitle, description } = props



return (
    <div className="project">
        <h3 className="project-title">{title}</h3>
        <img src={`../images/projects/${img}`} alt={title}></img>
        <div className="project-buttons">
            <a className="demo-button" href={url} target="_blank" rel="noreferrer">Demo</a>
            <a href={urlGit}><FaGithub /></a>
      
        </div>
        <h3 className="project-subtitle">{subtitle}</h3>
        <p className="project-description">{description} </p>
    </div>
)
}

