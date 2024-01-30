import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
<<<<<<< HEAD
=======

>>>>>>> 85f90b9d63a7a8e78b3b301ef70799c386d481b8
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';



export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const location = useLocation()

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (


    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={toggleHome}> <h1 className='title'><span className='span1'></span><span className='span2'></span></h1></Link>
        {/* <Link to="/" onClick={toggleHome}>   <img className="navbar-logo" src={logo} alt="logo"></img></Link> */}
      </div>


      {location.pathname === "/" ? (
        <div className="navbar-menu">
          <LinkS to="/" onClick={toggleHome}>
            Home
          </LinkS>
          <LinkS to="about" smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}  >About</LinkS>
          <LinkS to="portfolio" smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80} >Portfolio</LinkS>
          <LinkS to="contact" smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80} >Contact</LinkS>
        </div>
      ) : (
        <div className="navbar-menu">
          <Link to="/" onClick={toggleHome}>
            Home
          </Link>
          <LinkS to="contact" smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80} >Contact</LinkS>
        </div>
      )}

      <div className="mobile-menu" onClick={toggle}>
        <FaBars />
      </div>
    </div>
  )
}