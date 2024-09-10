import React from 'react'
import { FadeIn } from './FadeIn';

const Footer = () => {
  return (
    <>
      <FadeIn>
        <section>
          <div className="footer">
            <div className="main-footer">
              <div className="footer-box">
                <h5>Products</h5>
                <a href="../product/product1.html">
                  Flick Analytics <span><img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="../product/product2.html">
                  Site Analytics <span><img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="#">
                  Edu Analytics <span><img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="#">
                  Medical Analytics <span><img src="/top-right.png" alt="top-right" /></span>
                </a>
              </div>

              <div className="footer-box">
                <h5>Solutions</h5>
                <a href="../Solutions/movie-analytics.html">
                  Movie Analytics <span><img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="../Solutions/site-analytics.html">
                  Civil Analytics <span><img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="../Solutions/education-analytics.html">
                  Education Analytics <span><img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="../Solutions/health-analytics.html">
                  Doctor Analytics <span><img src="/top-right.png" alt="top-right" /></span>
                </a>
              </div>

              <div className="footer-box">
                <h5>Contact</h5>
                <a href="#">
                  Phone: +91 9884442082 <span>&nbsp;<img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="mailto:contact@indominouslabs.in">
                  Email:contact@indominouslabs.in <span>&nbsp;<img src="/top-right.png" alt="top-right" /></span>
                </a>

                <a href="#">
                  Location: Chennai <span>&nbsp;<img src="/top-right.png" alt="top-right" /></span>
                </a>
              </div>

              <div className="footer-box">
                <h5>Company</h5>
                <a href="#">
                  About Us <span>&nbsp;<img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="#">
                  Customers <span>&nbsp;<img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="#">
                  Partners <span>&nbsp;<img src="/top-right.png" alt="top-right" /></span>
                </a>
                <a href="#">
                  Life at Indominus Labs <span>&nbsp;<img src="/top-right.png" alt="top-right" /></span>
                </a>
              </div>
            </div>

            <div className="footer-spec-box">
              <div className="footer-logo">
                <a href="#">
                  <p>Made with&nbsp;</p>
                  <img className="love" src="/love.png" alt="love" />
                  <p>&nbsp;by&nbsp;</p>
                  <img className="ft-main-logo" src="/logo.png" alt="logo" />
                </a>
              </div>
              <div className="social-logos">
                <a href="#">
                  <img className="instagram" src="/instagram.png" alt="instagram" />
                </a>
                <a href="#">
                  <img src="/twitter.png" alt="twitter" />
                </a>
                <a href="https://www.linkedin.com/in/indominus-labs-210b4b24b/" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin.png" alt="linkedin" />
                </a>
                <a href="#">
                  <img src="/youtube.png" alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}

export default Footer
