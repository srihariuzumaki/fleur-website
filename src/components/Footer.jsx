import React from 'react';
import './Footer.css';

const Footer = () => {
    const instagramImages = []; // Array removed as section is deleted

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h4 className="footer-title">Less is definitely more.</h4>
                        <p className="footer-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.
                        </p>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Subscribe to Our Newsletter</h4>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="newsletter-input"
                            />
                            <button type="submit" className="newsletter-btn">SEND</button>
                        </form>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Latest Tweets</h4>
                        <p className="footer-text">Couldn't connect with Twitter</p>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p className="copyright">© 2017 Qode Interactive, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
