import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductsSection.css';

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const products = sectionRef.current.querySelectorAll('.product-item');

        products.forEach((product, index) => {
            gsap.from(product, {
                scrollTrigger: {
                    trigger: product,
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

    const products = [
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/01/blog-post-img-9-600x720.jpg',
            title: 'Diamond Ring Collection',
            price: '$2,500'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/02/blog-post-img-10-600x720.jpg',
            title: 'Premium Bouquet Package',
            price: '$350'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/blog-post-img-11-600x720.jpg',
            title: 'Custom Wedding Cake',
            price: '$800'
        },
        {
            image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/blog-post-img-12-600x720.jpg',
            title: 'Decoration Package',
            price: '$1,200'
        }
    ];

    return (
        <section className="products-section section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center mb-4">
                    <h2 className="section-title">Recommended Products</h2>
                    <p className="section-subtitle">Curated selections for your perfect day</p>
                </div>

                <div className="products-grid grid grid-4">
                    {products.map((product, index) => (
                        <div key={index} className="product-item">
                            <div className="product-image image-wrapper">
                                <img src={product.image} alt={product.title} loading="lazy" />
                            </div>
                            <div className="product-info">
                                <h4 className="product-title">{product.title}</h4>
                                <p className="product-price">{product.price}</p>
                                <button className="btn-link">View Details →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
