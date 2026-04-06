import React from 'react';

const Portfolio = () => {
    const portfolioItems = [
        {
            image: '/Project1.jpg',
            title: 'Project 1 FIGMA',
            description: 'Shoes Product project',
            link: '#',
        },
        {
            image: '/project2.jpg',
            title: 'Project 2 FIGMA',
            description: 'Music Playlist app',
            link: '#',
        },
        {
            image: '/project3.jpg',
            title: 'Project 3 FIGMA',
            description: 'Airpods Product project',
            link: '#',
        },
        {
            image: '/project4.jpg',
            title: 'Project 4 FIGMA',
            description: 'LocAlis Product project',
            link: '#',
        },
    ];

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <h2 className="section-title">My Work</h2>
                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="portfolio-item">
                            <img src={item.image} alt={item.title} />
                            <div className="portfolio-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.link} className="portfolio-link">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-primary">View All Projects</button>
            </div>
        </section>
    );
};

export default Portfolio;
