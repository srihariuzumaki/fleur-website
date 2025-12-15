import React, { useState, useEffect } from 'react';
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
                    <div className="logo">
                        <a href="#home">
                            <img
                                src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/logo-dark.png"
                                alt="Fleur"
                                className="logo-img"
                            />
                        </a>
                    </div>

                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#business" className="nav-link">Business</a>
                            </li>
                            <li className="nav-item">
                                <a href="#bridal" className="nav-link">Bridal</a>
                            </li>
                            <li className="nav-item">
                                <a href="#personal" className="nav-link">Personal</a>
                            </li>
                            <li className="nav-item">
                                <a href="#photography" className="nav-link">Photography</a>
                            </li>
                            <li className="nav-item">
                                <a href="#pages" className="nav-link">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#shop" className="nav-link">Shop</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
