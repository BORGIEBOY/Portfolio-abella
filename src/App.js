import React, { useState, useEffect } from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
            
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="App">
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;
