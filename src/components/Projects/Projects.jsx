import React, { useState, useEffect } from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { useParams, Link } from 'react-router-dom'
import './Projects.css'


export const Projects = () => {
    let params = useParams()
    const [projects, setProjects] = useState([])
    const [category, setCategory] = useState(params.cat)

    useEffect(() => {
        fetch('../data/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data.filter(project => project.category === category))
            })
            .catch(error => {
                console.error('Error al leer el archivo JSON:', error);
            });

    }, [category])


    return (
        <>
            <section className="categories-container" id="portfolio">
                <h2 className="categories-title">Portfolio</h2>
                <div className='portfolio-icons'>
                    <ul>
                        <li onClick={() => setCategory("sapui5")}>
                            <Link to="/portfolio/sapui5"> <img src="../images/categories/logo-avg.png" alt="" /></Link>
                        </li>
                        <li onClick={() => setCategory("react")}>
                            <Link to="/portfolio/react"> <img src="../images/categories/react.svg" alt="" /></Link>
                        </li>
                        <li onClick={() => setCategory("nextjs")} >
                            <Link to="/portfolio/nextjs"><img src="../images/categories/nextjs.svg" alt="" /></Link>
                        </li>
                    </ul>
                </div>
                <div className="projects">
                    {projects.map(project => (
                        <ProjectCard props={project} />
                    ))}
                </div>
            </section >
        </>
    )
}
