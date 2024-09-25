import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to="/weddings-events">Weddings & Events</Link></li>
                <li><Link to="/accommodations">Accommodations</Link></li>
                <li><Link to="/dining">Dining</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/booking">Booking</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
