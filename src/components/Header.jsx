import React, { useState } from 'react';
import { FaFilm, FaHardHat, FaHome, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isHoveringPopup, setIsHoveringPopup] = useState(false);
    const [popupClosing, setPopupClosing] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { icon: FaHome, label: 'Home', link: '/' },
        { icon: FaEnvelope, label: 'Contact', link: '/contact' },
    ];

    const productItems = [
        { icon: FaFilm, label: 'Flick Analytics', description: 'Movie Making Solutions On your Screen', link: '/product1' },
        { icon: FaHardHat, label: 'Site Analytics', description: 'Easy Data Management for Civil Engineers', link: '/product2' },
    ];

    const handleMouseLeave = () => {
        setTimeout(() => {
            if (!isHoveringPopup) {
                setPopupClosing(true);
                setTimeout(() => {
                    setIsPopupOpen(false);
                    setPopupClosing(false);
                }, 300);
            }
        }, 1000);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="/logo2.png" alt="Logo" />
                </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <div className="menu-container">
                    {menuItems.slice(0, 1).map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className={`menu-item ${activeItem === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveItem(index)}
                            onMouseLeave={() => setActiveItem(null)}
                            onClick={closeMobileMenu}
                        >
                            <item.icon className="icon" />
                            <span className="label">{item.label}</span>
                        </Link>
                    ))}
                    {/* Products menu item */}
                    <div
                        className="menu-item"
                        onMouseEnter={() => {
                            setActiveItem(menuItems.length);
                            setIsPopupOpen(true);
                        }}
                        onMouseLeave={handleMouseLeave}
                    >
                        <MdDevices className="icon" />
                        <span className="label">Products</span>
                    </div>
                    {menuItems.slice(1).map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className={`menu-item ${activeItem === index + 1 ? 'active' : ''}`}
                            onMouseEnter={() => setActiveItem(index + 1)}
                            onMouseLeave={() => setActiveItem(null)}
                            onClick={closeMobileMenu}
                        >
                            <item.icon className="icon" />
                            <span className="label">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </nav>
            <Link to="/schedule" className="schedule-btn" onClick={closeMobileMenu}>Schedule a Demo</Link>

            {/* Popup for Products */}
            {isPopupOpen && (
                <div
                    className={`popup ${popupClosing ? 'fade-up' : ''}`}
                    onMouseEnter={() => setIsHoveringPopup(true)}
                    onMouseLeave={() => {
                        setIsHoveringPopup(false);
                        handleMouseLeave();
                    }}
                >
                    <div className="popup-content">
                        {productItems.map((item, index) => (
                            <Link key={index} to={item.link} className="popup-item">
                                <item.icon className="icon" />
                                <div className="popup-details">
                                    <span className="popup-label">{item.label}</span>
                                    <span className="popup-description">{item.description}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;