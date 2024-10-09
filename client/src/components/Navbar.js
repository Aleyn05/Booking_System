import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import "../styles/Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location

    // Effect to close the menu on route change
    useEffect(() => {
        setIsOpen(false); // Close the menu when the location changes
    }, [location]); // Only run when the location changes

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu open/close
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-name">La Palmeraie</Link>
            <div className="menu-container">
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </div>
            </div>
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to="/weddings-events">Weddings & Events</Link></li>
                <li><Link to="/accommodations">Accommodations</Link></li>
                <li><Link to="/dining">Dining</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
