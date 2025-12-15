import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SharingSection.css';

gsap.registerPlugin(ScrollTrigger);

const SharingSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current.querySelectorAll('.sharing-card');

        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reverse'
                },
                y: 80,
                opacity: 0,
                duration: 1,
                delay: index * 0.15,
                ease: 'power3.out'
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const cards = [
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/03/home-1-image-1.jpg',
            title: 'Connect your worlds',
            description: 'Bring together your closest friends and family in a celebration of love and unity.'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/03/home-1-image-2.jpg',
            title: 'Choose your style',
            description: 'From classic elegance to modern sophistication, find the perfect aesthetic for your special day.'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/03/home-1-image-3.jpg',
            title: 'Wedding lists',
            description: 'Create beautiful registries and wish lists to help make your dreams come true.'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/03/home-1-image-4.jpg',
            title: 'Something Special',
            description: 'Every detail matters. Let us help you create unforgettable moments that last a lifetime.'
        }
    ];

    return (
        <section className="sharing-section section" id="explore" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center mb-4">
                    <h2 className="section-title">We're Sharing Everything</h2>
                </div>

                <div className="sharing-grid grid grid-4">
                    {cards.map((card, index) => (
                        <div key={index} className="sharing-card">
                            <div className="card-image image-wrapper">
                                <img src={card.image} alt={card.title} loading="lazy" />
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                                <a href="#" className="btn-link">Read more →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SharingSection;
