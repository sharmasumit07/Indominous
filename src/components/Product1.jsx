import React, { useState, useEffect } from 'react';
import "./product1.css";
import Header from './Header';
import SVGComponent1 from './svg';
import SVGComponent3 from './svg2';
import SVGComponent4 from './svg3';
import SVGComponent from './SVGComponent';
import './styles.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';
// import LottieAnimation from './svgcomp';

const Product1 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
    <div className="product1-container">
      <Header />

      <FadeIn>
        <section className="product1-hero">
          <div className="product1-intro">
            <div className="product1-main">
              <div className="product1-txt">
                <h1 className="hero-head">
                  Revolutionizing Movie Insights <br />
                  Empowering Analysis with
                </h1>
                <div className="wrapper">
                  <h1
                    className="predict-flick animated-text"
                    data-text-value="Flick Analytics"  // Ensure correct dataset value
                  >
                    Flick Analytics
                  </h1>
                </div>

                <p className="hero-txt">
                  Our Movie Analytics platform harnesses advanced contextual AI technology, <br />
                  we empower filmmakers to safeguard their creative assets, prevent piracy, <br />
                  and maintain brand integrity. Stay ahead of potential risks and protect your <br />
                  movie projects with our comprehensive analytics platform.
                </p>
              </div>

              <div className="product1-btns two-btns">
                <Link to="/contact">
                  <button className="learn-more-btn">Contact Us</button>
                </Link>
                <Link to="/schedule">
                  <button className="schedule-btn">Schedule a Demo</button>
                </Link>
              </div>
            </div>

            <div className="product1-images">
              <img className='product1-main-img' src='./film-camera.png' alt='camera' />
              <img className="product1-main-img2" src="./flick-home.svg" alt="flick-budgeting" />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="product1-features">
          <div className="product1-card flick-card">
            <div className="cards-section-two">
              <div className="card-2">
                <div className="card-two-svg">
                  <SVGComponent3 />
                </div>
                <div>
                  <h3 className="card-type">Flick Analytics</h3>
                  <p>Empowering Professionals, Transforming Industries: Where Innovation Meets Expertise in Healthcare, Education, and Beyond.</p>
                </div>
              </div>
              <div className="card-2">
                <div className="card-two-svg">
                  <SVGComponent4 />
                </div>
                <div>
                  <h3 className="card-type">Em Metrics</h3>
                  <p>Digital Risk Protection platform which gives Initial Attack Vector Protection for employees and customers.</p>
                </div>
              </div>
              {/* <div className="card-two">
                <div className="card-two-svg">
                  <SVGComponent />
                </div>
                <div>
                  <h3 className="card-type">Health Analytics</h3>
                  <p>Digital Risk Protection platform which gives Initial Attack Vector Protection for employees and customers.</p>
                </div>
              </div>
              <div className="card-two">
                <div className="card-two-svg">
                  <SVGComponent1 />
                </div>
                <div>
                  <h3 className="card-type">Education Analytics</h3>
                  <p>Digital Risk Protection platform which gives Initial Attack Vector Protection for employees and customers.</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="takedown-process-section">
          <div className="takedown-process-intro prevent">
            <div className="process-intro-lef prevent-svg">
              <img className="analysis" src="/analysis.png" alt="img" />
            </div>
            <div className="process-intro-second prevent-txt">
              <h3>Powerful Takedown <br /> <span className="highlight">Process</span></h3>
              <p>
                Our website management service provides comprehensive support for handling <br />
                takedowns from start to finish, including submission, follow-ups, and confirmation. <br />
                We empower website owners by simplifying the takedown process, allowing them to <br />
                focus on their core responsibilities without the hassle of manual intervention.
              </p>
              <div className="process-btns">
                <Link to="/schedule" style={{ textDecoration: 'none' }}>
                  <button className="schedule-btn review-btn-one">Request a Demo</button>
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
              <div className="card orange-card">
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
    </div>
  );
};

export default Product1;