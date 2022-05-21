import React, { useEffect } from "react";
import { Link } from 'react-router-dom'

function Nav() {

    
    return (
        <nav className="navbar">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <li  className="navbar-item m-1">
                        <Link to='about'>About Me</Link>
                    </li>
                    <a className="navbar-item">
                        Portfolio
                    </a>
                    <a className="navbar-item">
                        Contact
                    </a>
                    <a className="navbar-item">
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );

}

export default Nav;