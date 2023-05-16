import React, { useState, useEffect } from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard'

export const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('./data/projects.json')
            .then(response => response.json())
            .then(data => {
                // Aquí puedes trabajar con el contenido del archivo JSON
                setProjects(data)
            })
            .catch(error => {
                console.error('Error al leer el archivo JSON:', error);
            });

    }, [])


    return (
        <section className="categories-container" id="portfolio">
            <h2 className="categories-title">Portfolio</h2>
            <div className="categories">
                {projects.map(project => (
                    <ProjectCard props={project} />
                ))}
            </div>
        </section>
    )
}
