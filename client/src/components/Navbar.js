import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-name">La Palmeraie</Link>
            <div className="menu-container">
                <Link to="/booking" className="booking-link">Booking</Link>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </div>
            </div>
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to="/weddings-events">Weddings & Events</Link></li>
                <li><Link to="/accommodations">Accommodations</Link></li>
                <li><Link to="/dining">Dining</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
