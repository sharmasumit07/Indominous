import React, { useState } from 'react';
import './Sheduledemo.css';
import Header from './Header';
import Footer from './Footer';
import { FadeIn } from './FadeIn';

const Sheduledemo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    designation: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Log the form data before sending
      console.log('Form Data:', formData);

      // Send a POST request using fetch API
      const response = await fetch('http://localhost:4000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        setSuccessMessage('Demo scheduled successfully!');
        setErrorMessage('');
        setFormData({
          firstName: '',
          lastName: '',
          workEmail: '',
          phoneNumber: '',
          companyName: '',
          designation: ''
        });
      } else {
        // Handle error
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to schedule demo.');
      }
    } catch (error) {
      console.error('Error scheduling demo:', error.message);
      setErrorMessage('Failed to schedule demo. Please try again.');
      setSuccessMessage('');
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <FadeIn>
        <section>
          <div className="cyber-second5">
            <div className="cyber-second-right">
              <div>
                <h3>
                  Request For <br /> <span>DEMO</span>
                </h3>
              </div>
              <p>We are Open for Demo</p>
              <div className="intro-ticks">
                <div className="ticks">
                  <img src="./verify.png" alt="vtick" />
                  <p className="second-tick-txt">
                    Experience how our web apps seamlessly integrate into your workflow
                  </p>
                </div>
                <div className="ticks">
                  <img src="./verify.png" alt="vtick" />
                  <p className="second-tick-txt">
                    Witness firsthand how our customizable web apps cater to the unique needs of movie professionals
                  </p>
                </div>
                <div className="ticks">
                  <img src="./verify.png" alt="vtick" />
                  <p className="second-tick-txt">
                    Explore the power of data-driven insights
                  </p>
                </div>
              </div>
            </div>

            <div className="darkweb-form">
              <form onSubmit={handleSubmit}>
                <div className="request-form-name">
                  <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="workEmail">Work Email:</label>
                  <input 
                    type="email" 
                    id="workEmail" 
                    name="workEmail" 
                    value={formData.workEmail}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="companyName">Company Name:</label>
                  <input 
                    type="text" 
                    id="companyName" 
                    name="companyName" 
                    value={formData.companyName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="designation">Designation:</label>
                  <input 
                    type="text" 
                    id="designation" 
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required 
                  />
                </div>

                {loading ? (
                  <button type="submit" disabled>Submitting...</button>
                ) : (
                  <button type="submit">Submit</button>
                )}

                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </form>
            </div>
          </div>
        </section>
      </FadeIn>
      <Footer />
    </>
  );
};

export default Sheduledemo;
