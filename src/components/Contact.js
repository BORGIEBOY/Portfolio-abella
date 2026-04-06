import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Let's Connect</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>abellarolly483@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>0977-085-5499</p>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <a 
                            href="mailto:abellarolly483@gmail.com?subject=CV%20Request" 
                            className="btn btn-primary"
                        >
                            Request CV
                        </a>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {submitted && (
                            <div style={{
                                padding: '1rem',
                                backgroundColor: '#10b981',
                                color: 'white',
                                borderRadius: 'var(--border-radius)',
                                marginBottom: '1.5rem',
                            }}>
                                Message sent successfully!
                            </div>
                        )}
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
