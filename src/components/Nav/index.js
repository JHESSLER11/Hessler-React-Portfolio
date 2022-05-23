import React, { useEffect } from "react";
import { Link } from 'react-router-dom'



function Nav(props) {
    const {
        setContactSelected
    } = props;
    
    return (
        <header className="header">
            <h2 className="is-size-2"> <a data-testid="link" href="/about" onClick={() => setContactSelected(false)}>
                Jordan Hessler </a>
            </h2>
            <nav className="navbar">
                <div className="navbar-menu">
                    <div className="navbar-end is-size-5">
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
        </header>
    );

}

export default Nav;