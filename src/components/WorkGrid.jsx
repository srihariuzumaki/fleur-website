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
                    toggleActions: 'play none none reverse'
                },
                y: 50,
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
            title: 'ELEGANT CELEBRATION',
            category: 'Wedding Planning'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port2-img-2-650x650.jpg',
            title: 'PERFECT MOMENTS',
            category: 'Photography'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port2-img-3-650x650.jpg',
            title: 'FLORAL ARTISTRY',
            category: 'Decoration'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port4-img-7-650x650.jpg',
            title: 'DREAM VENUES',
            category: 'Locations'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port4-img-6-650x650.jpg',
            title: 'SWEET CREATIONS',
            category: 'Catering'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port2-img-4-650x650.jpg',
            title: 'LOVE STORIES',
            category: 'Couples'
        }
    ];

    return (
        <section className="work-section section" ref={sectionRef}>
            <div className="container-fluid">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">OUR AMAZING WORK</h2>
                    <p className="section-subtitle">Capturing beautiful moments and creating unforgettable experiences</p>
                    <div className="separator-line"></div>
                </div>

                <div className="work-masonry">
                    {works.map((work, index) => (
                        <div key={index} className="work-item">
                            <div className="work-image image-wrapper">
                                <img src={work.image} alt={work.title} loading="lazy" />
                                <div className="work-overlay">
                                    <div className="work-info">
                                        <h3 className="work-title">{work.title}</h3>
                                        <div className="separator-line-small"></div>
                                        <p className="work-category">{work.category}</p>
                                    </div>
                                    <div className="plus-icon">+</div>
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
