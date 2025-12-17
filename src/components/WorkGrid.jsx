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
                // y: 50,
                // opacity: 0,
                duration: 0.8,
                delay: (index % 3) * 0.2,
                ease: 'power3.out'
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const works = [
        {
            image: '/assets/images/work-1.jpg',
            title: 'ELEGANT CELEBRATION',
            category: 'Wedding Planning'
        },
        {
            image: '/assets/images/work-2.jpg',
            title: 'RUSTIC CHARM',
            category: 'Decoration'
        },
        {
            image: '/assets/images/work-3.jpg',
            title: 'FLORAL DREAMS',
            category: 'Floristry'
        },
        {
            image: '/assets/images/work-4.jpg',
            title: 'MODERN ROMANCE',
            category: 'Photography'
        },
        {
            image: '/assets/images/work-5.jpg',
            title: 'VINTAGE LOVE',
            category: 'Styling'
        },
        {
            image: '/assets/images/work-6.jpg',
            title: 'GARDEN PARTY',
            category: 'Catering'
        }
    ];

    return (
        <section className="work-section section" ref={sectionRef}>
            <div className="container-fluid">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">OUR AMAZING WORK</h2>
                    <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh</p>
                    <div className="separator-line"></div>
                </div>

                <div className="work-masonry">
                    {works.map((work, index) => (
                        <div key={index} className="work-item">
                            <div className="work-image">
                                <img src={work.image} alt={work.title} loading="lazy" />
                                <div className="work-overlay">
                                    <div className="work-info">
                                        <h4 className="work-title">{work.title}</h4>
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
