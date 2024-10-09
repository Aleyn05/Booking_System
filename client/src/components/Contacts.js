import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api'; // Import Google Maps components
import emailjs from 'emailjs-com'; // Import EmailJS
import '../styles/Contacts.css';

// Coordinates for "5MJQ+823, Mauban Road, Sampaloc, Quezon"
const center = { lat: 14.7090, lng: 121.4924 };

// Google Maps API key (replace with your actual key)
const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

function Contacts() {
    const [showPopup, setShowPopup] = useState(true); // State to manage the popup
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Prepare the email data
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send('service_ygca7nv', 'template_ygnjkib', templateParams, '96Mlq2uvcaVO3BiX9')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                // Clear the form
                setName('');
                setEmail('');
                setMessage('');
                alert('Your message has been sent successfully!');
            }, (err) => {
                console.error('Failed to send email. Error: ', err);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div className="contacts-container">
            <div className="overlay"></div>
            <h1>Contact Us</h1>
            <div className="contact-map-container">
                <div className="map-container">
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <GoogleMap
                            mapContainerStyle={{ height: '400px', width: '100%' }}
                            center={center}
                            zoom={15}
                        >
                            {/* Marker on the location */}
                            <Marker 
                                position={center}
                                onClick={() => setShowPopup(true)}
                            />

                            {/* Popup for the marker */}
                            {showPopup && (
                                <InfoWindow
                                    position={center}
                                    onCloseClick={() => setShowPopup(false)}
                                >
                                    <div>Our Resort Location: Mauban Road, Sampaloc, Quezon</div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Phone: (123) 456-7890</p>
                        <p>Landline: (098) 765-4321</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </a>
                            <a href="mailto:example@gmail.com">
                                <FaEnvelope size={24} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
