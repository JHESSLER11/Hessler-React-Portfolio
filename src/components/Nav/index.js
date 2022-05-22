import React, { useEffect } from "react";
import { Link } from 'react-router-dom'

function Nav() {

    
    return (
        <nav className="navbar">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <li  className="navbar-item">
                        <Link to='about'>About Me</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='portfolio'>Portfolio</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='contact'>Contact</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='resume'>Resume</Link>
                    </li>
                </div>
            </div>
        </nav>
    );

}

export default Nav;