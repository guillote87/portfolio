import React from 'react'
import './Projects.css'
import { FaGithub } from "react-icons/fa";
import img1 from "../../images/legacy-screen.png"
import img2 from "../../images/universidog-screen.png"
import img3 from "../../images/mern-ak-screen.png"

export const Projects = () => {
    return (
                <section className="projects-container" id="projects">

                <div className="projects">
                    <h2 className="projects-title"> My Projects</h2>
                    <div className="project">
                        <h3 className="project-title">Legacy ITC</h3>
                        <img src={img1} alt="legacy"></img>
                        <div className="project-buttons">
                            <a className="demo-button" href="http://legacyitc.com/"  target="_blank" rel="noreferrer">Demo</a>
                            <a href="http://legacyitc.com/"><FaGithub /></a>
                        </div>
                        <h3 className="project-subtitle">SPA(Single Page Application) Legacy ITC, servicios de consultoria en sistemas SAP</h3>
                        <p className="project-description">Pagina web implementada en React.Js, Implementacion de recepcion de mail con plataforma FormSpree para contacto </p>
                    </div>
                    <div className="project">
                        <h3 className="project-title">Universidog</h3>
                        <img src={img2} alt="universidog"></img>
                        <div className="project-buttons">
                            <a className="demo-button" href="http://universidog.herokuapp.com/"  target="_blank" rel="noreferrer">Demo</a>
                            <a href=""><FaGithub /></a>
                        </div>
                        <h3 className="project-subtitle">SPA(Single Page Application) Universidog ,servicios de educacion canina, pensionados, entrenamiento de perros de asistencia e intervenciones asistidas con animales, formacion para entrenadores</h3>
                        <p className="project-description">Interfaz de usuario realizada con CSS, JavaScript</p>
                    </div>
                    <div className="project">
                        <h3 className="project-title">MERN AK E-Commerce</h3>
                        <img src={img3} alt="mern-ak"></img>
                        <div className="project-buttons">
                            <a className="demo-button" href="http://mern-ak.herokuapp.com/"  target="_blank" rel="noreferrer">Demo</a>
                            <a href="http://mern-ak.herokuapp.com/"><FaGithub /></a>
                        </div>
                        <h3 className="project-subtitle">E-Commerce para distribuidora de articulos de higiene y medicamentos veterinarios </h3>
                        <p className="project-description">MERN React, se implemento e-commerce con MongoDB, Express, React y Node.js, implentacion de pasarela de pago PAYPAL y envio de mails de confirmacion de compra con MailGun</p>
                    </div>
                </div>

            </section>
    )
}
