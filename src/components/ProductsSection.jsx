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

    const products = [
        {
            image: '/assets/images/product-1.jpg',
            title: 'FLOWER BOX',
            price: '$25'
        },
        {
            image: '/assets/images/product-2.jpg',
            title: 'FLOWER POT',
            price: '$35'
        },
        {
            image: '/assets/images/product-3.jpg',
            title: 'FLOWER DECOR',
            price: '$45'
        }
    ];

    return (
        <section className="products-section section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">SHOP COLLECTION</h2>
                    <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh</p>
                    <div className="separator-line"></div>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-item">
                            <div className="product-image image-wrapper">
                                <img src={product.image} alt={product.title} loading="lazy" />
                                <div className="product-overlay">
                                    <button className="add-to-cart-btn">ADD TO CART</button>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4 className="product-title">{product.title}</h4>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
