import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import the CSS file

import pic1 from '../assets/img/pic-1.jpg'; // First image
import pic2 from '../assets/img/pic-1.jpg'; // Second image

function Home() {
    return (
        <div>
            {/* Home Section */}
            <div className="home-container">
                <div className="overlay-home"></div>
                <h1>Welcome to La Palmeraie Resort</h1>
                <p>Your perfect getaway awaits!</p>
                <Link to="/booking">
                    <button type="button">Book Now</button>
                </Link>
            </div>

             {/* Section 1: Image on the left, text on the right */}
            <div className="about-section-one">
                <img src={pic1} alt="Resort view" className="section-image" />
                <div className="section-text-one">
                    <h2>Our Exclusive Locations</h2>
                    <p>
                        Our resort is located in pristine environments, offering breathtaking views and private
                        beaches. Enjoy a unique blend of natural beauty and modern luxury.
                    </p>
                </div>
            </div>

            {/* Section 2: Image on the right, text on the left */}
            <div className="about-section-two">
                <div className="section-text-two">
                    <h2>Unmatched Amenities</h2>
                    <p>
                        Indulge in our world-class amenities, including a spa, gourmet dining, and endless recreational 
                        activities. Perfect for families, couples, and solo travelers.
                    </p>
                </div>
                <img src={pic2} alt="Resort amenities" className="section-image" />
            </div>
        </div>
    );
}

export default Home;
