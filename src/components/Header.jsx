import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <div className="logo">
                        <a href="#home">
                            <img
                                src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/logo-dark.png"
                                alt="Fleur"
                                className="logo-img"
                            />
                        </a>
                    </div>

                    {/* Centered Navigation */}
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#pages" className="nav-link">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#blog" className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="#shop" className="nav-link">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a href="#elements" className="nav-link">Elements</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Right Icons */}
                    <div className="header-icons">
                        {/* Cart Icon */}
                        <button className="header-icon" aria-label="Shopping cart">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                        </button>

                        {/* Search Icon */}
                        <button className="header-icon" aria-label="Search">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                        </button>

                        {/* Menu Icon */}
                        <button className="header-icon" aria-label="Menu">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
