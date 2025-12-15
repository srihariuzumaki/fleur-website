import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h4 className="footer-title">About Us</h4>
                        <p className="footer-text">
                            Fleur is dedicated to creating beautiful, memorable experiences for your special day.
                            We bring elegance and sophistication to every celebration.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#business">Business</a></li>
                            <li><a href="#bridal">Bridal</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Newsletter</h4>
                        <p className="footer-text">Subscribe to receive updates and inspiration.</p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="newsletter-input"
                            />
                            <button type="submit" className="newsletter-btn">Subscribe</button>
                        </form>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Follow Us</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <i className="social-icon">f</i>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <i className="social-icon">i</i>
                            </a>
                            <a href="#" className="social-link" aria-label="Pinterest">
                                <i className="social-icon">p</i>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <i className="social-icon">t</i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© 2025 Fleur. All rights reserved. Created for Code Nimbus Solutions.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
