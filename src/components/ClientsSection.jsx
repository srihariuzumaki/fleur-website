import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './ClientsSection.css';

const ClientsSection = () => {
    const clients = [
        {
            normal: '/assets/images/client-1.png',
            hover: '/assets/images/client-1-hover.png',
            name: 'Client 1'
        },
        {
            normal: '/assets/images/client-2.png',
            hover: '/assets/images/client-2-hover.png',
            name: 'Client 2'
        },
        {
            normal: '/assets/images/client-3.png',
            hover: '/assets/images/client-3-hover.png',
            name: 'Client 3'
        },
        {
            normal: '/assets/images/client-4.png',
            hover: '/assets/images/client-4-hover.png',
            name: 'Client 4'
        },
        {
            normal: '/assets/images/client-5.png',
            hover: '/assets/images/client-5-hover.png',
            name: 'Client 5'
        },
        {
            normal: '/assets/images/client-6.png',
            hover: '/assets/images/client-6-hover.png',
            name: 'Client 6'
        },
        {
            normal: '/assets/images/client-7.png',
            hover: '/assets/images/client-7-hover.png',
            name: 'Client 7'
        }
    ];

    return (
        <section className="clients-section section">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">Our Clients</h2>
                    <p className="section-subtitle">Trusted by the best in the industry</p>
                </div>

                <div className="clients-wrapper">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            576: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            992: {
                                slidesPerView: 5,
                                spaceBetween: 50
                            }
                        }}
                        className="clients-swiper"
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={index}>
                                <div className="client-logo">
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
