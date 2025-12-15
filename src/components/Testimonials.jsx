import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
            author: "MARIA & MARK",
            role: "Wedding Couple"
        },
        {
            quote: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.",
            author: "JANE & JOHN",
            role: "Happy Clients"
        },
        {
            quote: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
            author: "SARAH & TOM",
            role: "Newlyweds"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="testimonials-section section-large">
            <div className="testimonials-overlay"></div>
            <div className="container">
                <div className="testimonials-wrapper">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title text-white">TESTIMONIALS</h2>
                        <div className="separator-line white"></div>
                    </div>

                    <div className="testimonial-content">
                        <div className="quote-mark">"</div>
                        <blockquote className="testimonial-quote">
                            {testimonials[currentIndex].quote}
                        </blockquote>
                        <div className="testimonial-author">
                            <p className="author-name">{testimonials[currentIndex].author}</p>
                        </div>
                    </div>

                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
