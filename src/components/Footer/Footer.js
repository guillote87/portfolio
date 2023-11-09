import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-info" >
                <div className="footer-brand" >
                    {/* <img className="footer-logo" src={logo} alt=""></img> */}
                    <h2 className='footer-title'> </h2>
                    <h3>Guillermo Quattrocchi</h3>
                    <p> Full Stack Web Developer</p>
                    <p>+54 9 11-5615-0502</p>
                    <p>gq4dev@gmail.com</p>
                </div>

                <div className="footer-icons">
                    <h4>Follow Me</h4>
                    <div >
                        <a href="https://www.linkedin.com/in/guillermoquattrocchi/" target="_blank" rel="noreferrer"> <FaLinkedin /></a>
                        <a href="https://github.com/guillote87" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="https://www.instagram.com/gq4dev/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            {/* <div className="footer-info" >
                    <h4>Menu</h4>
                    <a href="/">Home</a>
                    <a href="/#about">About Me</a>
                    <a href="/#projects">My Projects</a>
                </div> */}
        </footer>



    )
}


