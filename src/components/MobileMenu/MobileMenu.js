import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './MobileMenu.css'
import Navbar from '../../components/Navbar/Navbar'

const MobileMenu = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <div>
                <span className="nav-btn">
                    <FontAwesomeIcon
                        icon={isActive ? faTimes : faBars}
                        onClick={() => setIsActive(!isActive)}
                    />
                </span>
            </div>
            {isActive && <Navbar />}
        </>
    )
}

export default MobileMenu
