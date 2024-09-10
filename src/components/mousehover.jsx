import React from 'react'
import './style.css';

const mousehover = () => {
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  return (
    <header className="header">
    <nav className="navbar">
      {/* ... logo and links */}

      <ul className="nav-links">
        <li className="nav-link">
          <a className="home-anchor" href="#">Home</a>
        </li>
        <li
          className="nav-link"
          onMouseEnter={() => setIsProductDropdownOpen(true)}
          onMouseLeave={() => setIsProductDropdownOpen(false)}
        >
          <div className="dropdown" data-dropdown>
            <button className="nav-btn" data-dropdown-button>
              Products <img className="down-arrow" src="/images/down-chevron.png" alt="Dropdown" />
            </button>
            {isProductDropdownOpen && (
              <div className="dropdown-menu product-dropdown">
                {/* Product dropdown content */}
              </div>
            )}
          </div>
        </li>
        <li
          className="nav-link"
          onMouseEnter={() => setIsContactDropdownOpen(true)}
          onMouseLeave={() => setIsContactDropdownOpen(false)}
        >
          <div className="dropdown res-dropdown" data-dropdown>
            <button className="nav-btn nav-btn-resource" data-dropdown-button>
              Contact Us
            </button>
            {isContactDropdownOpen && (
              <div className="dropdown-menu resource-dropdown">
                {/* Contact dropdown content */}
              </div>
            )}
          </div>
        </li>
      </ul>

      {/* Schedule a demo button and hamburger menu */}

    </nav>
  </header>
  )
}

export default mousehover
