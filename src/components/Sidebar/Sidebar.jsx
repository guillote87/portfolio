import React from 'react'
import './Sidebar.css'
import { FaTimes } from 'react-icons/fa'
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
import { Link, useLocation } from 'react-router-dom'

export const Sidebar = ({ isOpen, toggle }) => {

    const location = useLocation()
    const className = `sidebar-container ${isOpen ? "open" : ""}`;
    // const toggleHome = () => {
    //     scroll.scrollToTop()
    // }
    return (
        <aside className={className} onClick={toggle}>
            <div className='icon' onClick={toggle}>
                <FaTimes />
            </div>
            {location.pathname === "/" ? (
                <div className='sidebar-wrapper'>
                    <div className='sidebar-menu' to='#'>
                        <LinkS to="/" 
                         className='sidebar-link'
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         offset={-80} onClick={toggle}>
                            Home
                        </LinkS>
                        <LinkS to="about"
                            className='sidebar-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle} >About</LinkS>
                        <LinkS to="portfolio"
                            className='sidebar-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle} >Portfolio</LinkS>
                        <LinkS to="contact"
                            className='sidebar-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle} >Contact</LinkS>
                    </div>
                </div>
            ) : (
                <div className='sidebar-menu' to='#'>
                    <Link className='sidebar-link' to="/" onClick={toggle}>
                        Home
                    </Link>
                    <LinkS to="contact"
                            className='sidebar-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle} >Contact</LinkS>
                </div>
            )}
        </aside>
    )
}


