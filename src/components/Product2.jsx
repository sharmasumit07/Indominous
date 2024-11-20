import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
// import ReviewSlider from "./review1";
import { FadeIn } from './FadeIn';
import "./product2.css";
import Sheduledemo from './Sheduledemo';
import { Link } from 'react-router-dom';

const Product2 = () => {

  useEffect(() => {
    // Dynamically load CSS file
    const cssFile = './product1.css';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssFile;
    document.head.appendChild(link);

    // Text animation logic
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    function changeTextLetter(event) {
      let iteration = 0;
      const initText = event.target.innerText;
      clearInterval(interval);
      interval = setInterval(() => {
        event.target.innerText = initText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.textValue[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iteration >= event.target.dataset.textValue.length) {
          clearInterval(interval);
        }
        iteration += 1 / 5;
      }, 10);
    }

    // Apply animation on elements with class "animated-text"
    const animTexts = document.querySelectorAll(".animated-text");
    animTexts.forEach((element) => {
      changeTextLetter({ target: element });
    });

    return () => {
      // Clean up dynamically added CSS and intervals
      document.head.removeChild(link);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
  return (
    <>
      <Header />

      <FadeIn>
        <section>
          <div className="product2-intro">
            <div className="product2-intro-left">
              <h1>
                Unveiling Digital Landscapes: Empowering Insights with 
                <div className="wrapper">
                  <h1
                    className="predict-flick animated-text"
                    data-text-value="Em Metrics"  // Ensure correct dataset value
                  >
                    Em Metrics
                  </h1>
                </div>
              </h1>
              <p>
                Navigating the digital realm, our Site Analytics solution illuminates pathways to success, providing invaluable insights for optimized performance and enhanced user experiences.
              </p>
              <div className="product2-btns">
              <Link to="/schedule" ><a href="../components/demo.html">
                  <button className="schedule-btn review-btn-one">Sechdule a Demo</button>
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
                <Link to="/schedule" >
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
        <section className="product1-cards">
          <div className="cyber-cards">
            <div className="cards-section">
              <div className="card orange">
                <h1>
                  <span className="card-type">Flick Analytics</span>
                </h1>
                <p>
                  A revolutionary solution that uses machine learning and artificial intelligence to serve media and entertainment industry.
                </p>
                <Link to="/product1" style={{ textDecoration: 'none' }}>
                  <button className="card-btn1">
                    <img src="./next.png" alt="next" />&nbsp;Visit Us
                  </button>
                </Link>
              </div>
              <div className="card">
                <h1>
                  <span className="card-type">Em Metrics</span>
                </h1>
                <p>
                  Pioneering the digital landscape, our Site Analytics solution leverages cutting-edge machine learning and artificial intelligence technologies to empower businesses across diverse sectors.
                </p>
                <Link to="/product2" style={{ textDecoration: 'none' }}>
                  <button className="card-btn1">
                    <img src="./next.png" alt="next" />&nbsp;Visit Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* <ReviewSlider/> */}


      <FadeIn>
        <section className="demo-request-section">
        <div className="cyber-second5">
        <div className="cyber-second-right">
              <div>
                <h3>
                  Request For <br /> <span className="highlight">DEMO</span>
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
                <button type="submit" className="submit-btn">Submit</button>
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
