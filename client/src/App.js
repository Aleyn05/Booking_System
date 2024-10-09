import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the pages
import Navbar from './components/Navbar';
import Home from './components/Home';
import Offers from './components/Offers';
import Events from './components/Events';
import Facilities from './components/Facilities';
import Booking from './components/Booking';
import Contacts from './components/Contacts';

// Import the Chatbot component
import Chatbot from './components/Chatbot';

// Import the styles
import './styles/App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/facilities" element={<Facilities />} />
                        <Route path="/contact" element={<Contacts />} />
                        <Route path="/booking" element={<Booking />} />
                    </Routes>
                </div>
                <Chatbot />
                <footer>
                    <p>&copy; 2024 Resort Booking System. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
