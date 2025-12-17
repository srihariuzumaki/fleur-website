import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SharingSection.css';

gsap.registerPlugin(ScrollTrigger);

const SharingSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const items = sectionRef.current.querySelectorAll('.sharing-item');

        items.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                duration: 1,
                delay: index * 0.2,
                ease: 'power3.out'
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const posts = [
        {
            image: '/assets/images/blog-1.jpg',
            date: 'May 5, 2016',
            title: 'FLOWER POWER',
            link: '#'
        },
        {
            image: '/assets/images/blog-2.jpg',
            date: 'May 5, 2016',
            title: 'LOCAL FLORIST',
            link: '#'
        },
        {
            image: '/assets/images/blog-3.jpg',
            date: 'May 5, 2016',
            title: 'SUMMER SCENTS',
            link: '#'
        }
    ];

    return (
        <section className="sharing-section section" id="blog" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">FROM OUR BLOG</h2>
                    <p className="section-subtitle">
                        Lorem ipsum dolor sit amet, consectetuer a gravida nibhumus vel velit auctor aliquet aenean sollicitudin lorem.
                    </p>
                    <div className="separator-line"></div>
                </div>

                <div className="sharing-grid">
                    {posts.map((post, index) => (
                        <div key={index} className="sharing-item">
                            <div className="sharing-image-wrapper">
                                <img src={post.image} alt={post.title} className="sharing-image" loading="lazy" />
                                <div className="sharing-overlay"></div>
                            </div>
                            <div className="sharing-content">
                                <span className="sharing-date">{post.date}</span>
                                <h3 className="sharing-title">{post.title}</h3>
                                <div className="separator-line-small"></div>
                                <a href={post.link} className="sharing-link">READ MORE</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SharingSection;
