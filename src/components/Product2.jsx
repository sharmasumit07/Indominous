import React from 'react'
import Footer from './Footer';
import Header from './Header';
// import ReviewSlider from "./review1";
import { FadeIn } from './FadeIn';
import "./product2.css";
import Sheduledemo from './Sheduledemo';
import { Link } from 'react-router-dom';

const Product2 = () => {
  return (
    <>
      <Header />

      <FadeIn>
        <section>
          <div className="product2-intro">
            <div className="product2-intro-left">
              <h1>
                Unveiling Digital Landscapes: Empowering Insights with <span className="predict">Site Analytics</span>
              </h1>
              <p>
                Navigating the digital realm, our Site Analytics solution illuminates pathways to success, providing invaluable insights for optimized performance and enhanced user experiences.
              </p>
              <div className="product2-btns">
              <Link to="/shedule" ><a href="../components/demo.html">
                  <button className="schedule-btn review-btn-one">Sign Up</button>
                </a></Link>
                

              </div>
            </div>
            <div className="product2-images">
              <img className="product2-main-img" src="./site-intro.png" alt="flick-budgeting" />



            </div>
          </div>
        </section>
      </FadeIn>


      <FadeIn>
        <section>
          <div className="takedown-process-intro">
            <div className="process-intro-left">
              <img className="process-intro-main-image" src="./product2-img2.png" alt="process" />
              <img className="process-intro-second-image" src="./product2-img3.png" alt="process2" />
            </div>
            <div className="process-intro-second">
              <h3>
                Powerful Takedown <br /> <span>Process</span>
              </h3>
              <p>
                Our website management service provides comprehensive support for handling <br />
                takedowns from start to finish, including submission, follow-ups, and confirmation. <br />
                We empower website owners by simplifying the takedown process, allowing them to <br />
                focus on their core responsibilities without the hassle of manual intervention.
              </p>
              <div className="process-btns">
                <Link to="/shedule" >
                  <a href="../components/demo.html">
                    <button className="schedule-btn review-btn-one">Request a Demo</button>
                  </a>
                </Link>

              </div>
            </div>
          </div>
        </section>
      </FadeIn>


      <FadeIn>
        <section>
          <div className="cyber-cards">
            <div className="cards-section">
              <div className="card orange-card">
                <h1>
                  <span className="card-type">Site <br /> Analytics</span>
                </h1>
                <p>
                  Pioneering the digital landscape, our Site Analytics solution leverages cutting-edge machine learning and artificial intelligence technologies to empower businesses across diverse sectors.
                </p>
                <button className="card-btn">
                  <img src="./next.png" alt="next" />&nbsp;Visit Us
                </button>
              </div>
              <div className="card">
                <h1>
                  <span className="card-type">Flick Analytics</span>
                </h1>
                <p>
                A revolutionary solution that uses machine learning and artificial intelligence to serve media and entertainment industry.
                </p>
                <Link to="/product1" style={{ textDecoration: 'none' }} ><button className="card-btn">
                  <img src="./next.png" alt="next" />&nbsp;View All Partners
                </button></Link>
                
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* <ReviewSlider/> */}


      <FadeIn>
        <section>
          <div className="cyber-second">
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



      <Footer />


    </>
  )
}

export default Product2
