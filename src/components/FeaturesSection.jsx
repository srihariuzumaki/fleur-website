import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeaturesSection.css';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const items = sectionRef.current.querySelectorAll('.feature-item');

        items.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                // Removed opacity 0 for visibility safety
                duration: 1,
                delay: index * 0.2,
                ease: 'power3.out'
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const features = [
        {
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            ),
            title: "DISCOVER WHAT'S POSSIBLE",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis."
        },
        {
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            ),
            title: "PEOPLE REALLY MATTER",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis."
        },
        {
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            ),
            title: "HAVING A PLAN FEELS GOOD",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis."
        }
    ];

    return (
        <section className="features-section section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">WEDDING PLANNING</h2>
                    <p className="section-subtitle">
                        Lorem ipsum dolor sit amet, consectetuer a gravida nibhumus vel velit auctor aliquet aenean sollicitudin lorem.
                    </p>
                    <div className="separator-line"></div>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
