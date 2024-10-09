import React from 'react';
import '../styles/Events.css'; // Import the CSS file

import pic1 from '../assets/img/pic-1.jpg'; // First image
import pic2 from '../assets/img/pic-1.jpg'; // Second image

function Events() {
    return (
        <div>
            {/* Home Section */}
            <div className="events-container">
                <div className="overlay-events"></div>
                <h1>Events</h1>
                <p>Host your Special Events with us!</p>
            </div>

             {/* Section 1: Image on the left, text on the right */}
            <div className="event-section-one">
                <img src={pic1} alt="Resort view" className="event-section-image" />
                <div className="event-section-text-one">
                    <h2>Our Exclusive Locations</h2>
                    <p>
                        Our resort is located in pristine environments, offering breathtaking views and private
                        beaches. Enjoy a unique blend of natural beauty and modern luxury.
                    </p>
                </div>
            </div>

            {/* Section 2: Image on the right, text on the left */}
            <div className="event-section-two">
                <div className="event-section-text-two">
                    <h2>Unmatched Amenities</h2>
                    <p>
                        Indulge in our world-class amenities, including a spa, gourmet dining, and endless recreational 
                        activities. Perfect for families, couples, and solo travelers.
                    </p>
                </div>
                <img src={pic2} alt="Resort amenities" className="event-section-image" />
            </div>
        </div>
    );
}

export default Events;
