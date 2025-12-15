import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const scrollRef = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide-1-background.jpg',
            title: 'Fleur',
            subtitle: 'A Theme for Weddings, Celebrations, and Wedding Businesses'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide-3-background.jpg',
            title: 'Simply Charming',
            subtitle: 'Creating unforgettable moments for your special day'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide-4-background.jpg',
            title: 'Elegant Celebrations',
            subtitle: 'Where dreams become beautiful reality'
        }
    ];

    // Auto-play slider - fixed version
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []); // Empty dependency array - runs once on mount

    // Initial animation on page load
    useEffect(() => {
        const title = titleRef.current;
        const subtitle = subtitleRef.current;
        const cta = ctaRef.current;
        const scroll = scrollRef.current;

        const tl = gsap.timeline();

        tl.from(title, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        })
            .from(subtitle, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.6')
            .from(cta, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4')
            .from(scroll, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.2');

        // Parallax effect on scroll
        const hero = heroRef.current;
        gsap.to(hero, {
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5
            },
            y: 200,
            opacity: 0.3,
            ease: 'none'
        });

        gsap.to(title, {
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 150,
            opacity: 0,
            ease: 'none'
        });

        gsap.to(subtitle, {
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.2
            },
            y: 100,
            opacity: 0,
            ease: 'none'
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Slide change animation
    useEffect(() => {
        if (titleRef.current && subtitleRef.current) {
            setIsAnimating(true);

            const tl = gsap.timeline({
                onComplete: () => setIsAnimating(false)
            });

            tl.to([titleRef.current, subtitleRef.current], {
                opacity: 0,
                y: -30,
                duration: 0.5,
                ease: 'power2.in'
            })
                .set([titleRef.current, subtitleRef.current], {
                    y: 30
                })
                .to([titleRef.current, subtitleRef.current], {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1
                });
        }
    }, [currentSlide]);

    const nextSlide = () => {
        if (!isAnimating) {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    const goToSlide = (index) => {
        if (!isAnimating && index !== currentSlide) {
            setCurrentSlide(index);
        }
    };

    return (
        <section className="hero" id="home" ref={heroRef}>
            {/* Background slides */}
            <div className="hero-backgrounds">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-background ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            {/* Navigation arrows */}
            <button className="hero-nav hero-nav-prev" onClick={prevSlide} aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className="hero-nav hero-nav-next" onClick={nextSlide} aria-label="Next slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Slide indicator */}
            <div className="hero-indicator">
                <span className="current-slide">{currentSlide + 1}</span>
                <span className="slide-separator">/</span>
                <span className="total-slides">{slides.length}</span>
            </div>

            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title" ref={titleRef}>
                        {slides[currentSlide].title}
                    </h1>
                    <p className="hero-subtitle" ref={subtitleRef}>
                        {slides[currentSlide].subtitle}
                    </p>
                    <div className="hero-cta" ref={ctaRef}>
                        <a href="#explore" className="btn">Explore More</a>
                    </div>
                </div>

                <div className="scroll-indicator" ref={scrollRef}>
                    <div className="scroll-line"></div>
                    <span className="scroll-text">Scroll</span>
                </div>
            </div>

            {/* Slide dots */}
            <div className="hero-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
