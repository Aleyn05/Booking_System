import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import the CSS file

function Home() {
    return (
        <div>
            {/* Home Section */}
            <div className="home-container">
                <div className="overlay"></div>
                <h1>Welcome to Our Resort</h1>
                <p>Your perfect getaway awaits!</p>
                <Link to="/booking">
                    <button type="button">Book Now</button>
                </Link>
            </div>

            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="gallery">
                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src={require('../assets/img/pic-1.jpg')} alt="About La Palmeraie" />
                            <h3><Link to="/about">About La Palmeraie</Link></h3>
                            <p><Link to="/about">Read More</Link></p>
                        </div>
                        <div className="gallery-item">
                            <img src={require('../assets/img/pic-1.jpg')} alt="Offers" />
                            <h3><Link to="/offers">Offers</Link></h3>
                            <p><Link to="/offers">Read More</Link></p>
                        </div>
                        <div className="gallery-item">
                            <img src={require('../assets/img/pic-1.jpg')} alt="Weddings & Events" />
                            <h3><Link to="/weddings-events">Weddings & Events</Link></h3>
                            <p><Link to="/weddings-events">Read More</Link></p>
                        </div>
                        <div className="gallery-item">
                            <img src={require('../assets/img/pic-1.jpg')} alt="Accommodations" />
                            <h3><Link to="/accommodations">Accommodations</Link></h3>
                            <p><Link to="/accommodations">Read More</Link></p>
                        </div>
                        <div className="gallery-item">
                            <img src={require('../assets/img/pic-1.jpg')} alt="Dining" />
                            <h3><Link to="/dining">Dining</Link></h3>
                            <p><Link to="/dining">Read More</Link></p>
                        </div>
                        <div className="gallery-item">
                            <img src={require('../assets/img/pic-1.jpg')} alt="Facilities" />
                            <h3><Link to="/facilities">Facilities</Link></h3>
                            <p><Link to="/facilities">Read More</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
