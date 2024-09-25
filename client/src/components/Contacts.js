import React from 'react';
import '../styles/Contacts.css';

function Contacts() {
    return (
        <div className="contacts-container">
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contacts;
