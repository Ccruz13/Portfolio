import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <p>
                        C
                    </p>
                </div>
                <div className="nav-container">
                    <ul>
                        <li>
                            About Me
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                    <div>
                    <a className="resume-button">Resume</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;
