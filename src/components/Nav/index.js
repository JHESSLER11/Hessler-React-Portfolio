import React, { useEffect } from "react";

function Nav({ currentPage, setCurrentPage }) {

    
    return (
        <nav className="navbar">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a  className="navbar-item m-1" data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                        About Me
                    </a>
                    <a className="navbar-item" data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
                        Portfolio
                    </a>
                    <a className="navbar-item" data-testid="contact" href="#contact" onClick={() => setContactSelected(false)}>
                        Contact
                    </a>
                    <a className="navbar-item" data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );

}

export default Nav;