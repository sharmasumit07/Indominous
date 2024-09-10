import React from 'react';
import './styles.css';
import SVGComponent5 from './Svghome';
import SVGComponent6 from './Svghome2';
// import '../swiper-bundle.min.css'
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer';
import Header from './Header';
// import ReviewSlider from "./review1";
import { FadeIn } from './FadeIn';
import Sheduledemo from './Sheduledemo';
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <>
            <Header />

            <FadeIn>
            <section className="intro">
                <div className="hero">
                    <div className="gradient-hero">
                        <p>Advance. Innovate.&nbsp;<strong>Elevate</strong></p>
                    </div>
                    <div className="hero-head">
                        <h1>Harnessing Technology for <br /><span className="predict">Healthcare, Education,</span> and <span className="predict">Beyond.</span> </h1>
                    </div>
                    <div className="hero-txt">
                        <p>Empowering Professionals, Transforming Industries: Where Innovation Meets Expertise in Healthcare,
                            Education, and Beyond.</p>
                    </div>
                    <div className="two-btns">
                    <Link to="/contact" >
                    <button className="learn-more-btn">Contact Us</button>
                        </Link>
                        
                        <Link to="/shedule" >
                        <a href="../components/demo.html"><button className="schedule-btn">Schedule a Demo</button></a>
                        </Link>
                        
                    </div>
                    <div className="two-factor">
                        <SVGComponent5 />
                        <div className="two-factor-txt">
                            <h2>Innovation and Web-based Solutions</h2>
                        </div>
                    </div>
                </div>
            </section>
            </FadeIn>

            <FadeIn>
            <section>
                <div className="prevent">
                    <div className="prevent-first">
                        <div className="prevent-txt">
                            <h2>How do we provide<span className="predict">Web Based Solutions?</span></h2>
                            <br />
                            <p>At our company, we provide web-based solutions tailored specifically to the needs of <strong>doctors, educators, and health professionals.</strong>
                                With a keen understanding of the complexities within these industries, we leverage our expertise to develop intuitive and user-centric products.
                                Our solutions are designed to seamlessly integrate with existing systems, ensuring a smooth transition and maximizing efficiency.
                                We prioritize scalability and flexibility, allowing our products to adapt to the evolving needs of our customers.<br /><br />
                                Ultimately, our goal is to deliver <strong>tailored web-based solutions</strong> that achieve objectives in the healthcare, education, and health sectors.
                            </p>
                        </div>
                        <div className="prevent-btns">
                        <Link to="/contact" >
                    <button className="learn-more-btn">Contact Us</button>
                        </Link>
                        
                        <Link to="/shedule" >
                        <a href="../components/demo.html"><button className="schedule-btn">Schedule a Demo</button></a>
                        </Link>
                        </div>
                    </div>
                    <div className="prevent-svg">
                        <SVGComponent6 />
                        {/* Add your SVG or any image/content here */}
                    </div>
                </div>
            </section>
            </FadeIn>

            <FadeIn>
            <section>
                <div className="threecard-box">
                    <div className="gradient-hero">
                        <p className="sol-grad"><strong>PRODUCTS</strong></p>
                    </div>
                    <div className="hero-head">
                        <h5 className="h5-module">Powerful Modules,</h5>
                        <h5 className="h5-solutions">Powerful Solutions</h5>
                    </div>
                    <div className="hero-txt">
                        <p>Across verticals, some of the world's largest and most innovative firms find our solutions perfect for their needs with over 170 use cases.</p>
                    </div>
                </div>

                <div className="main-card-section">
                    <div className="cards-section">
                        <div className="card">
                            <h1><span className="card-type">FLICK Analytics</span></h1>
                            <p>Bringing cinematic magic to your fingertips with our immersive movie streaming platform.</p>
                            <Link to="/product1" style={{ textDecoration: 'none' }} ><a href="#"><button className="card-btn">Learn more about this</button></a></Link>
                            
                        </div>
                        <div className="card">
                            <h1><span className="card-type">SITE Analytics</span></h1>
                            <p>Building the future with innovative & advanced digital tools for the civil engineering industry.</p>
                            <Link to="/product2" style={{ textDecoration: 'none' }} ><a href="../product/product2.html"><button className="card-btn">Learn more about this</button></a></Link>
                            
                        </div>

                        <div className="card">
                            <h1><span className="card-type">MEDICAL Analytics</span></h1>
                            <p>Revolutionizing healthcare with our intuitive doctor-patient interaction platform.</p>
                        <button className="card-btn">Learn more about this</button>
                        </div>
                        <div className="card">
                            <h1><span className="card-type">EDU Analytics</span></h1>
                            <p>Transforming education through engaging and interactive e-learning solutions.</p>
                            <button className="card-btn">Learn more about this</button>
                        </div>
                    </div>
                </div>
            </section>
            </FadeIn>


        
            {/* <ReviewSlider /> */}
            


            <FadeIn>
            <section>
                <div className="main-integrations">
                    <div className="integration-head">
                        <h5>INTEGRATIONS</h5>
                        <h2>Don't Replace;</h2>
                        <h3>Integrate</h3>
                    </div>
                    <p>
                        Our website features a suite of intuitive web applications catering to sectors like healthcare,
                        education, and wellness. Through our seamless integration mechanism, users can leverage our advanced
                        solutions effortlessly, envisioning a future where digital threats are proactively addressed and
                        remediated.
                    </p>
                    <div className="integration-btns">
                        <button className="schedule-btn ">View all Integrations</button>
                        <Link to="/shedule" >
                        <a href="../components/demo.html"><button className="schedule-btn">Schedule a Demo</button></a>
                        </Link>
                    </div>
                    <div className="integration-ticks">
                        <div>
                            <img src="/correct.png" alt="Tick Icon" />
                            <p>Works with Popular apps</p>
                        </div>

                        <div>
                            <img src="/correct.png" alt="Tick Icon" />
                            <p>Integrates Flawlessly with SOARs</p>
                        </div>

                        <div>
                            <img src="/correct.png" alt="Tick Icon" />
                            <p>Next-gen features</p>
                        </div>
                    </div>
                </div>
            </section>
            </FadeIn>


            <FadeIn>
            <section>
                <div className="main-partners">
                    <div className="partners-img">
                        <img src="/prd1-bg.png" alt="Partners Background" />
                    </div>

                    <div className="partners-right-block">
                        <div className="partners-head">
                            <h5>PARTNERS</h5>
                            <h2>
                                Hundreds of Partners,
                                <br />
                                One shared Goal:
                                <br />
                                A Safer & Advanced space!
                            </h2>
                        </div>
                        <p>
                            From start-ups to conglomerates, organizations around the globe rely on Indominus Labs to protect
                            their digital assets. And so, the Indominus Labs partner ecosystem comprises of partners who share
                            our values, allowing us to offer our customers the most advanced and the latest technology,
                            together.
                        </p>
                        <p className="partners-main-para">
                            100+ Diverse Global Partners, Distributors, Value-Added Vendors, and System Integrators.
                        </p>
                        <div className="partners-btns">
                            <button className="learn-more-btn">View Partners</button>
                            
                        
                        <Link to="/shedule" >
                        <a href="../components/demo.html"><button className="schedule-btn">Schedule a Demo</button></a>
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
            </FadeIn>

            <Footer />








        </>
    )
}

export default Home
