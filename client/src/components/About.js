import React from 'react';
import '../styles/About.css';
import pic1 from '../assets/img/pic-1.jpg'; // First image
import pic2 from '../assets/img/pic-1.jpg'; // Second image

function About() {
    return (
        <div>
            {/* About Section */}
            <div className="about-container">
                <div className="overlay"></div>
                <h1>About Our Resort</h1>
                <p>Experience luxury and comfort in our beautiful resort.</p>
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

export default About;
