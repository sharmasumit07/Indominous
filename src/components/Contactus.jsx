import React from 'react';
import './contact.css'; // Import the CSS file
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <section className='contact-section'>
                <div className='contact-container'>

                    <div className='contact-image'>
                        <img src="/contact-png.png" alt="Get in Touch" />
                        <h2>Email: 
                            <a href="mailto:contact@indominouslabs.in">
                                 contact@indominouslabs.in
                                
                            </a>
                        </h2>

                    </div>
                    <div className='contact-form-wrapper'>
                        <h2 className='contact-title'>We’d Love to Hear From You</h2>
                        <p className='contact-description'>
                            Whether you have a question,feel free to contact us
                        </p>
                        <form className='contact-form'>
                            <div className='input-group'>
                                <input type="text" id="name" required />
                                <label htmlFor="name">Full Name</label>
                            </div>
                            <div className='input-group'>
                                <input type="email" id="email" required />
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <div className='input-group'>
                                <textarea id="message" required></textarea>
                                <label htmlFor="message">Your Message</label>
                            </div>
                            <button type="submit" className='submit-btn'>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;