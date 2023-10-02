import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <div className="header">

                <div className='socials'>
                    <a href="https://www.linkedin.com/in/evan-long-a3424b242" target="_blank" >
                        <i className="fab fa-linkedin fa-3x linkedin-icon"></i>
                    </a>
                </div>

                <button onClick={handleMenuToggle} className="show-menu-btn">
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                <ul className={`menu ${menuOpen ? 'open' : ''}`} style={{ right: menuOpen ? '0' : '-100%' }}>
                    <Link to="/home" onClick={closeMenu}>About Me</Link>
                    <Link to="/projects" onClick={closeMenu}>Projects</Link>
                </ul>

                <div className="socials">
                    <a href="https://github.com/long2ej" target="_blank" className='github-icon' rel="noopener noreferrer">
                        <i className="fab fa-3x fa-github"></i>
                    </a>
                </div>


            </div>


        </header>
    );
}

export default Navbar;
