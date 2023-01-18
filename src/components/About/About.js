import React from 'react'
import "./About.css"
import img from "../../images/portfolio.jpeg"
import sap from "../../images/sap-vector-logo.svg"
import { FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";


export const About = () => {
    return (
        <div>
            <section className="about" id="about">
                <h1 className="about-title"> ABOUT ME</h1>
                <div className="about-main">
                    <div className="profile-img" src={img} alt="profile-img"></div>
                    <div className="about-bio">
                        <h2 className="bio-title">BIO</h2>
                        <p className="bio-description">
                            Con casi 20 años de experiencia en el mundo del soporte
                            informatico, hoy me encuentro en la búsqueda de insertarme
                            formalmente en lo que al mundo de la programación se refiere,
                            siempre me apasiono todo lo relacionado a la computación y
                            hoy elijo continuar mi carrera profesional en este nuevo campo.
                            Estoy entusiasmado de ganar más experiencia en este rubro y
                            espero que su empresa pueda darme la oportunidad de
                            sumarme a su equipo. Soy una persona amable, respetuosa,
                            creativa, con capacidad de liderazgo, y motivada para trabajar. </p>
                    </div>
                </div>
                <div className="info-sections">
                    <div className="info-section">
                        <h2 className="info-title">Work History</h2>

                        <h3 className="info-subtitle">Fixsur Inteligencia Aplicada - Buenos Aires, Argentina </h3>
                        <p className="info-date">12/2008 - 12/2020</p>

                        <h3 className="info-subtitle">Bocalan Argentina - Buenos Aires, Argentina </h3>
                        <p className="info-date">12/2013 - Today</p>
                    </div>
                    <div className="info-section">
                        <h2 className="info-title">Education</h2>

                        <h3 className="info-subtitle">Digital House Full Stack Web Developer - Buenos Aires, Argentina </h3>
                        <p className="info-date">8/2021 - 12/2021</p>

                        <h3 className="info-subtitle"> Aceleracion Alkemy Node JOB READY - Buenos Aires, Argentina  </h3>
                        <p className="info-date">5/2022 - Finalizado</p>


                    </div>
                    <div className="info-section">
                        <h2 className="info-title">Skills</h2>
                        <h3 className="info-subtitle"><img className="sap-img" src={sap}/>  SAPUI 5 </h3>
                        <h3 className="info-subtitle"><FaJs /> Javascript </h3>
                        <h3 className="info-subtitle"><FaReact /> React </h3>
                        <h3 className="info-subtitle"><FaNodeJs /> Node.Js </h3>
                        <h3 className="info-subtitle"><FaDatabase /> MongoDB </h3>
  
                    </div>
                    <div className="info-section">
                        <h2 className="info-title">Languages</h2>
                        <h3 className="info-subtitle">Ingles </h3>
                        <p className="info-date">EF SET English Certificate 68/100 (C1 Advanced)</p>
                        <a href="https://www.efset.org/cert/4AJTB1" target="_blank" rel="noreferrer"> <p class="info-subtitle"> EF Certificate</p></a>

                    </div>
                    <div className="info-section">
                        <h2 className="info-title">Certifications</h2>

                        <h3 className="info-subtitle">SAP ABAP RESTFUL Iniciación</h3>
                        <p className="info-date">Logali Group - 2022</p>

                        <h3 className="info-subtitle">WEBINAR SAP FIORI SAPUI5 - Desarrollo de aplicaciones - LOGALI Group</h3>
                        <p className="info-date">Logali Group - 2022</p>

                        <h3 className="info-subtitle">Desarrollo de aplicaciones FIORI con SAPUI5 en SAP BAS - LOGALI Group </h3>
                        <p className="info-date">Logali Group - 2022</p>

                        <h3 className="info-subtitle">WEBINAR SAP FIORI Gráficos Vizframe con SAPUI5 - LOGALI Group</h3>
                        <p className="info-date">Logali Group - 2022</p>

                       
                        
                       


                    </div>
                </div>
            </section>

        </div>
    )
}
