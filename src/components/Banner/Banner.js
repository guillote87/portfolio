import React from 'react'
import './Banner.css'
import img from '../../images/banner.jpg'
import { FaLinkedin, FaGithub,FaInstagram } from "react-icons/fa";

export const Banner = () => {
    return (
        <header className="banner" id="/">
            <div className="banner-info">
                <h1 className="banner-title">Guillermo Quattrocchi</h1>
                <p className="banner-paragraph">Full Stack Web Developer</p>
                <div className="banner-icons">
                  <a href="https://www.linkedin.com/in/guillermoquattrocchi/" target="_blank" rel="noreferrer"> <FaLinkedin /></a>
                   <a href="https://github.com/guillote87" target="_blank" rel="noreferrer"><FaGithub /></a> 
                    <a href="https://www.instagram.com/gq4dev/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                </div>
            </div>
            <div className='banner-img'>
                <img src={img} alt="back-img"></img>
            </div>
        </header>
    )
}
