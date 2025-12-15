import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ClientsSection.css';

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const logos = sectionRef.current.querySelectorAll('.client-logo');

        logos.forEach((logo, index) => {
            gsap.from(logo, {
                scrollTrigger: {
                    trigger: logo,
                    start: 'top 90%',
                    end: 'top 70%',
                    toggleActions: 'play none none reverse'
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                delay: (index % 7) * 0.05,
                ease: 'back.out(1.7)'
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const clients = [
        {
            normal: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-1.png',
            hover: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-1-hover.png',
            name: 'Client 1'
        },
        {
            normal: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-2.png',
            hover: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-2-hover.png',
            name: 'Client 2'
        },
        {
            normal: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-3.png',
            hover: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-3-hover.png',
            name: 'Client 3'
        },
        {
            normal: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-4.png',
            hover: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-4-hover.png',
            name: 'Client 4'
        },
        {
            normal: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-5.png',
            hover: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-5-hover.png',
            name: 'Client 5'
        },
        {
            normal: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/client-6.png',
            hover: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/client-6-hover.png',
            name: 'Client 6'
        },
        {
            normal: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/client-7.png',
            hover: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/client-7-hover.png',
            name: 'Client 7'
        }
    ];

    return (
        <section className="clients-section section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center mb-4">
                    <h2 className="section-title">Our Clients</h2>
                    <p className="section-subtitle">Trusted by the best in the industry</p>
                </div>

                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div key={index} className="client-logo">
                            <img
                                src={client.normal}
                                alt={client.name}
                                className="client-img client-img-normal"
                                loading="lazy"
                            />
                            <img
                                src={client.hover}
                                alt={client.name}
                                className="client-img client-img-hover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
