import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WorkGrid.css';

gsap.registerPlugin(ScrollTrigger);

const WorkGrid = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const items = sectionRef.current.querySelectorAll('.work-item');

        items.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    end: 'top 60%',
                    toggleActions: 'play none none reverse'
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: (index % 3) * 0.1,
                ease: 'power3.out'
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const works = [
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port2-img-1-650x650.jpg',
            title: 'Elegant Celebration',
            category: 'Wedding Planning'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port2-img-2-650x650.jpg',
            title: 'Perfect Moments',
            category: 'Photography'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port2-img-3-650x650.jpg',
            title: 'Floral Artistry',
            category: 'Decoration'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port4-img-7-650x650.jpg',
            title: 'Dream Venues',
            category: 'Locations'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port4-img-6-650x650.jpg',
            title: 'Sweet Creations',
            category: 'Catering'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port2-img-4-650x650.jpg',
            title: 'Love Stories',
            category: 'Couples'
        }
    ];

    return (
        <section className="work-section section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center mb-4">
                    <h2 className="section-title">Our Amazing Work</h2>
                    <p className="section-subtitle">Capturing beautiful moments and creating unforgettable experiences</p>
                </div>

                <div className="work-grid grid grid-3">
                    {works.map((work, index) => (
                        <div key={index} className="work-item">
                            <div className="work-image image-wrapper">
                                <img src={work.image} alt={work.title} loading="lazy" />
                                <div className="work-overlay">
                                    <div className="work-info">
                                        <h3 className="work-title">{work.title}</h3>
                                        <p className="work-category">{work.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkGrid;
