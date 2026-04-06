import React, { useState, useEffect } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');
    const [skillsAnimated, setSkillsAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !skillsAnimated) {
                    setSkillsAnimated(true);
                }
            });
        });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }

        return () => observer.disconnect();
    }, [skillsAnimated]);

    const skills = [
        { name: 'UI/UX Design', width: '50%' },
        { name: 'Web Development', width: '30%' },
        { name: 'App Development', width: '15%' },
    ];

    const experience = [
        {
            period: '2024 - Present',
            description: 'Still doing Projects and no outside experience',
        },
        {
            period: '2023 - 2024',
            description: 'Doing Projects',
        },
    ];

    const education = [
        {
            period: '2024 - 2026',
            description: 'Western Institute of Technology',
        },
        {
            period: '2022 - 2024',
            description: 'Senior High School(CMCS)',
        },
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-image">
                        <img src="/profile.jpg" alt="Rolly Abella" />
                    </div>
                    <div className="about-content">
                        <p>
                            I'm a passionate UX Designer from Western Institute of Technology. I love creating seamless digital experiences and enjoy gaming in my free time to sharpen my problem-solving skills.
                        </p>

                        <div className="tabs">
                            <button
                                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                                onClick={() => setActiveTab('skills')}
                            >
                                Skills
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                                onClick={() => setActiveTab('experience')}
                            >
                                Experience
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                                onClick={() => setActiveTab('education')}
                            >
                                Education
                            </button>
                        </div>

                        {activeTab === 'skills' && (
                            <div id="skills" className="tab-content active">
                                {skills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <span>{skill.name}</span>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{
                                                    width: skillsAnimated ? skill.width : '0%',
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'experience' && (
                            <div className="tab-content active">
                                <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                                    {experience.map((exp, index) => (
                                        <li key={index} style={{ marginBottom: '1rem' }}>
                                            <span style={{ fontWeight: '600', color: 'var(--black)' }}>
                                                {exp.period}
                                            </span>
                                            <br />
                                            <span>{exp.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'education' && (
                            <div className="tab-content active">
                                <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                                    {education.map((edu, index) => (
                                        <li key={index} style={{ marginBottom: '1rem' }}>
                                            <span style={{ fontWeight: '600', color: 'var(--black)' }}>
                                                {edu.period}
                                            </span>
                                            <br />
                                            <span>{edu.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
