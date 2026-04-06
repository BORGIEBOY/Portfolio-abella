import React, { useState } from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ['home', 'about', 'services', 'portfolio', 'contact'];

    const handleNavClick = (section) => {
        setActiveSection(section);
        setIsMenuOpen(false);
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">Portfolio</div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                className={`nav-link ${activeSection === link ? 'active' : ''}`}
                                onClick={() => handleNavClick(link)}
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
                <div
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
