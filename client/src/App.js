import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Offers from './components/Offers';
import Events from './components/Events';
import Accommodations from './components/Accommodations';
import Dining from './components/Dining';
import Facilities from './components/Facilities';
import Booking from './components/Booking';
import Contacts from './components/Contacts';

import Chatbot from './components/Chatbot';

import './styles/App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="/weddings-events" element={<Events />} />
                        <Route path="/accommodations" element={<Accommodations />} />
                        <Route path="/dining" element={<Dining />} />
                        <Route path="/facilities" element={<Facilities />} />
                        <Route path="/contact" element={<Contacts />} />
                        <Route path="/booking" element={<Booking />} />
                    </Routes>
                </div>
                <Chatbot />
                <script id="messenger-widget-b" src="https://cdn.botpenguin.com/website-bot.js" defer>6706201db561b00b97c70a3d,670615db65fb7611293f479c</script>
                <footer>
                    <p>&copy; 2024 Resort Booking System. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
