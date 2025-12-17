import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TeamSection.css';

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const members = sectionRef.current.querySelectorAll('.team-member');

        members.forEach((member, index) => {
            gsap.from(member, {
                scrollTrigger: {
                    trigger: member,
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

    const team = [
        {
            image: '/assets/images/team-1.png',
            name: 'AMANDA DOE',
            role: 'Wedding Planner',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.'
        },
        {
            image: '/assets/images/team-2.png',
            name: 'JANE DOE',
            role: 'Photographer',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.'
        },
        {
            image: '/assets/images/team-3.png',
            name: 'JOHN DOE',
            role: 'Decorator',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.'
        }
    ];

    return (
        <section className="team-section section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">OUR AMAZING TEAM</h2>
                    <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh</p>
                    <div className="separator-line"></div>
                </div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <div key={index} className="team-member">
                            <div className="member-image image-wrapper">
                                <img src={member.image} alt={member.name} loading="lazy" />
                            </div>
                            <div className="member-info">
                                <h4 className="member-name">{member.name}</h4>
                                <p className="member-role">{member.role}</p>
                                <p className="member-description">{member.description}</p>
                                <div className="social-icons">
                                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
