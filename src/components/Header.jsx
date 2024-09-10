import React, { useState } from 'react';
import { FaFilm, FaHardHat, FaGraduationCap, FaHospital } from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const Header = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state for hamburger menu

    const toggleProductsDropdown = () => {
        setIsProductsOpen(!isProductsOpen);
        if (isContactOpen) setIsContactOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle hamburger menu state
    };

    return (
        <>
            <FadeIn>
                <header className="header">
                    <nav className="navbar">
                        <div className="logo">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <img src="/logo.png" alt="Logo" />
                            </Link>
                        </div>

                        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                            <li><Link to="/" style={{ textDecoration: 'none' }} ><a className="home-anchor" href="#">Home</a></Link></li>

                            <li className="nav-link">
                                <div className="dropdown-wrapper">
                                    <button className="dropdown-button" onClick={toggleProductsDropdown}>
                                        Products
                                        <span className="arrow">{isProductsOpen ? '▲' : '▼'}</span>
                                    </button>
                                    {isProductsOpen && (
                                        <div className="dropdown-content">
                                            <div className="dropdown-item">
                                                <FaFilm className="icon" />
                                                <div>
                                                    <Link to="/product1" style={{ textDecoration: 'none' }} ><h4>Flick Analytics</h4></Link>
                                                    <p>Movie Making Solutions On your Screen</p>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <FaHardHat className="icon" />
                                                <div>
                                                    <Link to="/product2" style={{ textDecoration: 'none' }}><h4>Site Analytics</h4></Link>
                                                    <p>Easy Data Management for Civil Engineers</p>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <FaGraduationCap className="icon" />
                                                <div>
                                                    <h4>Edu Analytics</h4>
                                                    <p>Better Data Management for Universities</p>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <FaHospital className="icon" />
                                                <div>
                                                    <h4>Medical Analytics</h4>
                                                    <p>Safe and Secure Hospitals Data Management</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </li>

                            <li className="nav-link">
                                <div className="dropdown-container">
                                    <Link to="/Contact">
                                        <h4>
                                            <button className="dropdown-toggle">Contact Us</button>
                                        </h4>
                                    </Link>
                                </div>
                            </li>
                        </ul>

                        <Link to="/shedule">
                            <button className="schedule-btn schedule-btn-navbar">Schedule a Demo</button>
                        </Link>

                        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </nav>
                </header>
            </FadeIn>
        </>
    );
};

export default Header;
