import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Offers from './components/Offers';
import WeddingsEvents from './components/WeddingsEvents';
import Accommodations from './components/Accommodations';
import Dining from './components/Dining';
import Facilities from './components/Facilities';
import Booking from './components/Booking';
import Contacts from './components/Contacts';

import './styles/App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="/weddings-events" element={<WeddingsEvents />} />
                        <Route path="/accommodations" element={<Accommodations />} />
                        <Route path="/dining" element={<Dining />} />
                        <Route path="/facilities" element={<Facilities />} />
                        <Route path="/contact" element={<Contacts />} />
                        <Route path="/booking" element={<Booking />} />
                    </Routes>
                </div>
                <footer>
                    <p>&copy; 2024 Resort Booking System. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
