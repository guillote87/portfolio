import React from 'react'
import './Sidebar.css'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Sidebar = ({ isOpen, toggle }) => {
    const className = `sidebar-container ${isOpen ? "open" : ""}`;
    return (
        <aside className={className} onClick={toggle}>
            <div className='icon' onClick={toggle}>
                <FaTimes />
            </div>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu' to='#'>
                    <Link className='sidebar-link' to="/about" onClick={toggle}>
                        About
                    </Link>
                    <Link className='sidebar-link' to="/portfolio/sapui5" onClick={toggle}>
                        Portfolio
                    </Link>
                    <Link className='sidebar-link' to="/contact" onClick={toggle}>
                        Contact
                    </Link>
                </div>
            </div>
        </aside>
    )
}


