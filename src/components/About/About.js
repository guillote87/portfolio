import React from 'react'
import "./About.css"
import img from "../../images/portfolio.jpeg"
import { FaJs, FaReact,FaNodeJs,FaDatabase} from "react-icons/fa";


export const About = () => {
    return (
        <div>
            <section className="about"id="about">
                <h1 className="about-title"> ABOUT ME</h1>
                <div className="about-main">
                    <div className="profile-img" src={img} alt="profile-img"></div>
                    <div className="about-bio">
                        <h2 className="bio-title">BIO</h2>
                        <p className="bio-description">
                            Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach. Madison is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student,’ eager to both build on her academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework.
                        </p>
                    </div>
                </div>
                <div className="info-sections">
                <div className="info-section">
                    <h2 className="info-title">Work History</h2>

                    <h3 className="info-subtitle">Fixsur Inteligencia Aplicada - Buenos Aires, Argentina </h3>
                    <p className="info-date">12/2008 - 12/2018</p>

                    <h3 className="info-subtitle">Pawnia Pet Shop - Buenos Aires, Argentina </h3>
                    <p className="info-date">12/2018 - Today</p>

                    <h3 className="info-subtitle">Bocalan Argentina - Buenos Aires, Argentina </h3>
                    <p className="info-date">12/2013 - Today</p>
                </div>
                <div className="info-section">
                    <h2 className="info-title">Education</h2>

                    <h3 className="info-subtitle">Digital House Full Stack Web Developer - Buenos Aires, Argentina </h3>
                    <p className="info-date">8/2021 - 12/2021</p>

                    <h3 className="info-subtitle">Pawnia Pet Shop - Buenos Aires, Argentina </h3>
                    <p className="info-date">12/2018 - Today</p>

                </div>
                <div className="info-section">
                    <h2 className="info-title">Skills</h2>

                    <h3 className="info-subtitle"><FaJs/> Javascript </h3>
                    <h3 className="info-subtitle"><FaReact/> React </h3>
                    <h3 className="info-subtitle"><FaNodeJs/> Node.Js </h3>
                    <h3 className="info-subtitle"><FaDatabase/> MongoDB </h3>
                </div>
                </div>
            </section>

        </div>
    )
}
