import React from 'react';

const Hero = () => {
    const handleScroll = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <span className="hero-subtitle">UX Designer</span>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Rolly Abella</span>
                    </h1>
                    <p className="hero-desc">I craft intuitive digital experiences that delight users.</p>
                    <div className="hero-buttons">
                        <button 
                            className="btn btn-primary"
                            onClick={() => handleScroll('portfolio')}
                        >
                            View My Work
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => handleScroll('contact')}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
                <div className="hero-scroll">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </section>
    );
};

export default Hero;
