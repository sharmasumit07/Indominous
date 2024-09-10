import React from 'react'
import './Sheduledemo.css';
import Header from './Header';
import Footer from './Footer';
import { FadeIn } from './FadeIn';

const Sheduledemo = () => {
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
            <form action="/submit" method="POST">
              <div className="request-form-name">
                <div>
                  <label htmlFor="first-name">First Name:</label>
                  <input type="text" id="first-name" name="first-name" required />
                </div>
                <div>
                  <label htmlFor="last-name">Last Name:</label>
                  <input type="text" id="last-name" name="last-name" required />
                </div>
              </div>

              <div>
                <label htmlFor="work-email">Work Email:</label>
                <input type="email" id="work-email" name="work-email" required />
              </div>
              <div>
                <label htmlFor="phone-number">Phone Number:</label>
                <input type="tel" id="phone-number" name="phone-number" required />
              </div>
              <div>
                <label htmlFor="company-name">Company Name:</label>
                <input type="text" id="company-name" name="company-name" required />
              </div>
              <div>
                <label htmlFor="designation">Designation:</label>
                <input type="text" id="designation" name="designation" required />
              </div>
              {/* reCAPTCHA checkbox */}
              <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      </FadeIn>
      <Footer/>
   </>
  )
}

export default Sheduledemo
