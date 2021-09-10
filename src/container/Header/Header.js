import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MobileMenu from '../../components/MobileMenu/MobileMenu'

import './Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <div className="col-xs-12 header-logo">
                    <a href="/" className="header-logo">
                        <img src="/images/logo.png" alt="" />
                    </a>
                </div>
                <div className="col-hidden header-top-navbar">{<Navbar />}</div>
                <div className="mobile-navbar">{<MobileMenu />}</div>
            </div>
        </>
    )
}

export default Header
