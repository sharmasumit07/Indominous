import React, { useState } from 'react';
import './contact.css'; // Import the CSS file
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    // State to manage form inputs
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formStatus, setFormStatus] = useState({ success: null, message: '' });

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the backend
            const response = await fetch('http://localhost:4000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullname, email, message }),
            });

            const data = await response.json();

            if (data.success) {
                // Update form status to show success message
                setFormStatus({ success: true, message: 'Your message has been sent!' });
                // Reset form fields
                setFullname('');
                setEmail('');
                setMessage('');
            } else {
                // Update form status to show error message
                setFormStatus({ success: false, message: 'Failed to send your message. Please try again.' });
            }
        } catch (error) {
            console.error('Error submitting form', error);
            setFormStatus({ success: false, message: 'An error occurred. Please try again.' });
        }
    };

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
                            Whether you have a question, feel free to contact us
                        </p>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <div className='input-group'>
                                <input 
                                    type="text" 
                                    id="name" 
                                    required 
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)} 
                                />
                                <label htmlFor="name">Full Name</label>
                            </div>
                            <div className='input-group'>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <div className='input-group'>
                                <textarea 
                                    id="message" 
                                    required 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} 
                                ></textarea>
                                <label htmlFor="message">Your Message</label>
                            </div>
                            <button type="submit" className='submit-btn'>Send Message</button>
                        </form>
                        {/* Display success or error message */}
                        {formStatus.message && (
                            <p className={formStatus.success ? 'success-message' : 'error-message'}>
                                {formStatus.message}
                            </p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
