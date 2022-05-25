import React from "react";
import { Link } from 'react-router-dom'



function Nav(props) {
    const {
        setContactSelected
    } = props;
    
    return (
        <header className="header">
            <h2 className="is-size-2"> <a data-testid="link" href="hessler-react-portfolio" onClick={() => setContactSelected(false)}>
                Jordan Hessler </a>
            </h2>
            <nav className="navbar">
                <div className="navbar-menu is-active">
                    <div className="navbar-end is-size-5">
                        <li  className="navbar-item">
                            <Link to='hessler-react-portfolio'>About Me</Link>
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