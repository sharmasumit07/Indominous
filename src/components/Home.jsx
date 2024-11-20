import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SVGComponent5 from './Svghome';
import SVGComponent6 from './Svghome2';
import Footer from './Footer';
import Header from './Header';
import './home.css';


const ProductCard = ({ title, description, link }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        const syncPointer = ({ x: pointerX, y: pointerY }) => {
            const x = pointerX.toFixed(2);
            const y = pointerY.toFixed(2);
            const xp = (pointerX / window.innerWidth).toFixed(2);
            const yp = (pointerY / window.innerHeight).toFixed(2);
            card.style.setProperty('--x', x);
            card.style.setProperty('--xp', xp);
            card.style.setProperty('--y', y);
            card.style.setProperty('--yp', yp);
        };

        card.addEventListener('pointermove', syncPointer);

        return () => {
            card.removeEventListener('pointermove', syncPointer);
        };
    }, []);

    return (
        <div className="card-imp" data-glow ref={cardRef}>
            <h1><span className="card-type">{title}</span></h1>
            <p>{description}</p>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <button className="card-btn" data-glow><span>Learn more about this</span></button>
            </Link>
        </div>
    );
};

const Home = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        return () => {
            document.querySelectorAll('section').forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const productCards = [
        {
            title: "Flick Analytics",
            description: (
                <>
                    Bringing cinematic magic to your fingertips with our <br /> immersive movie streaming platform.
                </>
            ),
            link: "/product1"
        },
        {
            title: "Em Metrics",
            description: (
                <>
                    Building the future with innovative & advanced 
                     digital <br /> tools  for the civil engineering industry.
                </>
            ),
            link: "/product2"
        },
    ];

    // {
    //     title: "Medic Analytics",
    //     description: "Revolutionizing healthcare with our intuitive doctor-patient interaction platform.",
    //     link: "/product3"
    // },
    // {
    //     title: "Edu Analytics",
    //     description: "Transforming education through engaging and interactive e-learning solutions.",
    //     link: "/product4"
    // }


    return (
        <div className="home-container">
            <Header activeSection={activeSection} />

            <section id="intro" className="intro">
                <div className="hero">
                    <div className="gradient-hero">
                        <p>Advance. Innovate.&nbsp;<strong>Elevate</strong></p>
                    </div>
                    <div className="hero-head">
                        <h1>Harnessing Technology for <br /><span className="predict">Healthcare, Education,</span> and <span className="predict">Beyond.</span></h1>
                    </div>
                    <div className="hero-txt">
                        <p>Empowering Professionals, Transforming Industries: Where Innovation Meets Expertise in Healthcare, Education, and Beyond.</p>
                    </div>
                    <div className="two-btns">
                        <Link to="/contact">
                            <button className="learn-more-btn">Contact Us</button>
                        </Link>
                        <Link to="/schedule">
                            <button className="schedule-btn">Schedule a Demo</button>
                        </Link>
                    </div>
                </div>
                <div className="blob-container">
                    <div className="blob"></div>
                    <div className="blob blob2"></div>
                </div>
                <div className="two-factor">
                    <SVGComponent5 />
                    <div className="two-factor-txt">
                        <h2>Innovation and Web-based Solutions</h2>
                    </div>
                </div>
            </section>


            <section id="solutions" className="prevent-section">
                <div className="prevent">
                    <div className="prevent-first">
                        <div className="prevent-txt">
                            <h2>
                                How do we provide <span className="predict">Web-Based Solutions?</span>
                            </h2>
                            <p>
                                We offer web-based solutions tailored for <strong>doctors, educators, and health professionals.</strong>
                                Our expertise allows us to develop intuitive, user-centric products that integrate seamlessly with existing systems.
                            </p>
                            <p>
                                Our goal is to deliver <strong>tailored solutions</strong> that enhance efficiency and adapt to evolving needs.
                            </p>
                        </div>
                        <div className="prevent-btns">
                            <Link to="/contact">
                                <button className="learn-more-btn">Contact Us</button>
                            </Link>
                            <Link to="/schedule">
                                <button className="schedule-btn">Schedule a Demo</button>
                            </Link>
                        </div>
                    </div>
                    <div className="prevent-svg">
                        <SVGComponent6 />
                    </div>
                </div>
            </section>


            <section id="products" className="products-section">
                <div className="threecard-box">
                    <div className="gradient-hero">
                        <p className="sol-grad"><strong>EXPLORE OUR PRODUCTS</strong></p>
                    </div>
                    <div className="hero-head">
                        <h5 className="h5-module">Innovative Modules,</h5>
                        <h5 className="h5-solutions">Transformative Solutions</h5>
                    </div>
                    <div className="hero-txt">
                        <p>Our solutions empower organizations across various sectors—enabling them to overcome challenges with over 170 innovative use cases tailored to specific needs.</p>
                    </div>
                </div>


                <div className="main-card-section">
                    <div className="cards-section-imp">
                        {productCards.map((card, index) => (
                            <ProductCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="integrations" className="integrations-section">
                <div className="main-integrations">
                    <div className="integration-head">
                        <h5>INTEGRATIONS</h5>
                        <h2>Don't Replace; Integrate</h2>
                    </div>
                    <p>
                        Our website features a suite of intuitive web applications catering to sectors like healthcare,
                        education, and wellness. Through our seamless integration mechanism, users can leverage our advanced
                        solutions effortlessly, envisioning a future where digital challenges are proactively addressed and
                        resolved.
                    </p>
                    <div className="integration-btns">
                        <button className="learn-more-btn">View all Integrations</button>
                        <Link to="/schedule">
                            <button className="schedule-btn">Schedule a Demo</button>
                        </Link>
                    </div>
                    <div className="integration-ticks">
                        {['Works with Popular apps', 'Integrates Flawlessly with SOARs', 'Next-gen features'].map((text, index) => (
                            <div key={index}>
                                <img src="/correct.png" alt="Tick Icon" />
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* <section id="partners" className="partners-section">
                <div className="main-partners">
                    <div className="partners-img">
                        <img src="/prd1-bg.png" alt="Partners Background" />
                    </div>
                    <div className="partners-right-block">
                        <div className="partners-head">
                            <h3>PARTNERS</h3>
                            <h2>
                                Hundreds of Partners,<br />
                                One shared Goal:<br />
                                A Safer & Advanced space!
                            </h2>
                        </div>
                        <p>
                            From start-ups to conglomerates, organizations around the globe rely on Indominus Labs to protect
                            their digital assets. Our partner ecosystem comprises partners who share our values, allowing us
                            to offer our customers the most advanced and latest technology, together.
                        </p>
                        <p className="partners-main-para">
                            100+ Diverse Global Partners, Distributors, Value-Added Vendors, and System Integrators.
                        </p>
                        <div className="partners-btns">
                            <button className="learn-more-btn">View Partners</button>
                            <Link to="/schedule">
                                <button className="schedule-btn">Schedule a Demo</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}

            <Footer />
        </div>
    );
};

export default Home;