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
                    end: 'top 60%',
                    toggleActions: 'play none none reverse'
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: (index % 4) * 0.1,
                ease: 'power3.out'
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const team = [
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/team-2-img-1.png',
            name: 'Emma Wilson',
            role: 'Lead Planner'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/team-2-img-2.png',
            name: 'Sophie Anderson',
            role: 'Floral Designer'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/team-2-img-3.png',
            name: 'Michael Chen',
            role: 'Venue Specialist'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/team-2-img-1.png',
            name: 'Isabella Martinez',
            role: 'Event Coordinator'
        }
    ];

    return (
        <section className="team-section section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center mb-4">
                    <h2 className="section-title">Our Amazing Team</h2>
                    <p className="section-subtitle">Meet the talented professionals who bring your dreams to life</p>
                </div>

                <div className="team-grid grid grid-4">
                    {team.map((member, index) => (
                        <div key={index} className="team-member">
                            <div className="member-image image-wrapper">
                                <img src={member.image} alt={member.name} loading="lazy" />
                                <div className="member-overlay">
                                    <div className="member-info">
                                        <h4 className="member-name">{member.name}</h4>
                                        <p className="member-role">{member.role}</p>
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

export default TeamSection;
