import React from 'react'
import './Banner.css'
import { FaLinkedin, FaGithub,FaInstagram, FaWhatsapp } from "react-icons/fa";

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
<<<<<<< HEAD
                    <a href="https://api.whatsapp.com/send?phone=1156150502&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20." rel="noreferrer" class="float" target="_blank"><FaWhatsapp/></a>
=======
                    <a href="https://api.whatsapp.com/send?phone=1156150502&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20." class="float" rel="noreferrer" target="_blank">1156150502</a>
>>>>>>> 85f90b9d63a7a8e78b3b301ef70799c386d481b8
                </div>
            </div>
            <div className='banner-img'>
                <img src="./images/icons/banner.jpg" alt="back-img"></img>
            </div>
        </header>
    )
}
