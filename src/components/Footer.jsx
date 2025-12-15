import React from 'react';
import './Footer.css';

const Footer = () => {
    const instagramImages = [
        'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/instagram-1.jpg',
        'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/instagram-2.jpg',
        'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/instagram-3.jpg',
        'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/instagram-4.jpg',
        'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/instagram-5.jpg',
        'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/instagram-6.jpg'
    ];

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

                    <div className="footer-column">
                        <h4 className="footer-title">Instagram</h4>
                        <div className="instagram-grid">
                            {instagramImages.map((img, index) => (
                                <a key={index} href="#" className="instagram-item">
                                    <img src={img} alt={`Instagram ${index + 1}`} loading="lazy" />
                                </a>
                            ))}
                        </div>
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
