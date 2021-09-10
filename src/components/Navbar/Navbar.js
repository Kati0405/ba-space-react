import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <a href="/#" className="navbar-item">
                Home
            </a>
            <a href="/#" className="navbar-item">
                Articles
            </a>
            <Dropdown />
            <a href="/#" className="navbar-item">
                Staff
            </a>
            <Link to="/contacts" className="navbar-item">
                Contacts
            </Link>
        </div>
    )
}

export default Navbar
