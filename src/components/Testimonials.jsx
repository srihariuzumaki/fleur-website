import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Engaging, creative page and purposeful theme.",
            author: "Sarah & Michael",
            role: "Happy Couple"
        },
        {
            quote: "The perfect blend of elegance and functionality for our special day.",
            author: "Emma & James",
            role: "Newlyweds"
        },
        {
            quote: "Beautiful design that captured the essence of our love story.",
            author: "Olivia & Daniel",
            role: "Married 2024"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="testimonials-section section-large">
            <div className="container">
                <div className="testimonials-wrapper">
                    <div className="section-header text-center mb-4">
                        <h2 className="section-title">Testimonials</h2>
                    </div>

                    <div className="testimonial-content">
                        <div className="quote-mark">"</div>
                        <blockquote className="testimonial-quote">
                            {testimonials[currentIndex].quote}
                        </blockquote>
                        <div className="testimonial-author">
                            <p className="author-name">{testimonials[currentIndex].author}</p>
                            <p className="author-role">{testimonials[currentIndex].role}</p>
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
