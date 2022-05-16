import React, { useState } from 'react'
import "./Navbar.css"
import { Link as LinkS } from 'react-scroll'
import logo from '../../images/logo.png'
import { FaBars } from "react-icons/fa";
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (


        <div className="navbar">
            <div className="navbar-logo">
                <LinkS to="home" >   <img className="navbar-logo" src={logo} alt="logo"></img></LinkS>
            </div>
            <div className={isOpen ? "navbar-menu-open" : "navbar-menu"}>
                <LinkS to="home"  onClick={() => {
          setIsOpen(!isOpen);
        }}  >Home</LinkS>
                <LinkS to="about" onClick={() => {
          setIsOpen(!isOpen);
        }} >About</LinkS>
                <LinkS to="projects" onClick={() => {
          setIsOpen(!isOpen);
        }} >Projects</LinkS>
                <LinkS to="contact" onClick={() => {
          setIsOpen(!isOpen);
        }} >Contact</LinkS>
            </div>
            <button onClick={() => {
          setIsOpen(!isOpen);
        }} className="mobile-menu">
                <FaBars />
            </button>
        </div>
    )
}
