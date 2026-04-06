import React from 'react';

const Services = () => {
    const services = [
        {
            icon: 'fas fa-code',
            title: 'Web Design',
            description: 'Beautiful, responsive websites that engage users and drive results.',
        },
        {
            icon: 'fas fa-paint-brush',
            title: 'UI/UX Design',
            description: 'Intuitive interfaces that create seamless user experiences.',
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'App Design',
            description: 'Mobile-first designs optimized for iOS and Android platforms.',
        },
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">What I Do</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
