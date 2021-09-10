import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './Dropdown.css'

function Dropdown() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="dropdown">
            <a
                href="/#"
                className="navbar-item dropdown-btn"
                onClick={() => setIsActive(!isActive)}
            >
                Categories
                <span className="chevron-down">
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </a>
            {isActive && (
                <div className="dropdown-content">
                    <Link to="/earth">
                        <div className="dropdown-item">Earth</div>
                    </Link>
                    <Link to="/planet">
                        <div className="dropdown-item">Planet</div>
                    </Link>
                    <Link to="/technology">
                        <div className="dropdown-item">Technology</div>
                    </Link>
                    <Link to="/science">
                        <div className="dropdown-item">Science</div>
                    </Link>
                    <Link to="/universe">
                        <div className="dropdown-item">Universe</div>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Dropdown
