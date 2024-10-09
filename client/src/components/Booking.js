import React, { useState } from 'react';
import '../styles/Booking.css';

function Booking() {
    const [date, setDate] = useState('');
    const [numGuests, setNumGuests] = useState(1);
    const [guestNames, setGuestNames] = useState(['']);
    const [guestEmail, setGuestEmail] = useState(''); // Single email state
    const [guestHeights, setGuestHeights] = useState(['']);
    const [bookingType, setBookingType] = useState('public');
    const [selectedCottages, setSelectedCottages] = useState([]);

    // Define cottages with their prices and capacities
    const cottagesInfo = {
        'Cottage A': { price: 600, capacity: 20 },
        'Cottage B': { price: 450, capacity: 10 },
        'Cottage C': { price: 450, capacity: 10 },
        'Cottage D': { price: 350, capacity: 10 },
        'Cottage E': { price: 350, capacity: 10 },
        'Cottage F': { price: 350, capacity: 10 },
        'Cottage G': { price: 350, capacity: 10 },
        'T.Hut': { price: 800, capacity: 30 },
        'Umbrella': { price: 200, capacity: 4 },
    };

    const handleHeightChange = (index, value) => {
        const newHeights = [...guestHeights];
        newHeights[index] = value;
        setGuestHeights(newHeights);
    };

    const handleNameChange = (index, value) => {
        const newNames = [...guestNames];
        newNames[index] = value;
        setGuestNames(newNames);
    };

    const handleEmailChange = (value) => {
        setGuestEmail(value); // Update email directly
    };

    const handleCottageChange = (cottage) => {
        setSelectedCottages(prevSelected => {
            if (prevSelected.includes(cottage)) {
                return prevSelected.filter(c => c !== cottage);
            } else {
                return [...prevSelected, cottage];
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const guestDetails = guestNames
            .map((name, index) => {
                const height = guestHeights[index] || 'N/A';
                return `Guest ${index + 1}: ${name} (Height: ${height} cm)`;
            })
            .filter(name => name.trim() !== '')
            .join(', ');

        const cottages = selectedCottages.join(', ');
        
        // Calculate total price based on selected cottages and their capacities
        const totalPrice = selectedCottages.reduce((total, cottage) => {
            return total + cottagesInfo[cottage].price;
        }, 0);
        
        alert(`Booking submitted for ${numGuests} guests in ${cottages} cottage(s): ${guestDetails} on ${date}. Total Price: $${totalPrice}`);
    };

    return (
        <div className="booking-container">
            <div className="overlay-booking">
                <h1>Booking</h1>
                <p>Book your stay with us now!</p>

                <div className="booking-options">
                    <label>
                        <input
                            type="radio"
                            value="public"
                            checked={bookingType === 'public'}
                            onChange={() => {
                                setBookingType('public');
                                setGuestNames(Array(numGuests).fill(''));
                                setGuestHeights(Array(numGuests).fill(''));
                                setSelectedCottages([]);
                            }}
                        />
                        Public Booking
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="private"
                            checked={bookingType === 'private'}
                            onChange={() => {
                                setBookingType('private');
                                setGuestHeights(Array(numGuests).fill(''));
                                setGuestNames(Array(numGuests).fill('')); // Clear names when switching to private
                                setSelectedCottages([]);
                            }}
                        />
                        Private Booking (Event)
                    </label>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Date:</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div>
                        <label>Guest Email:</label>
                        <input
                            type="email"
                            value={guestEmail}
                            onChange={(e) => handleEmailChange(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Number of Guests:</label>
                        <input
                            type="number"
                            value={numGuests}
                            onChange={(e) => {
                                const value = Math.max(1, e.target.value);
                                setNumGuests(value);
                                setGuestNames(Array(value).fill(''));
                                setGuestHeights(Array(value).fill(''));
                            }}
                            min="1"
                            required
                        />
                    </div>

                    {/* Render guest name and height inputs only for public bookings */}
                    {bookingType === 'public' && Array.from({ length: numGuests }).map((_, index) => (
                        <div key={index} className="guest-info">
                            <div className="guest-name">
                                <label>Guest {index + 1} Name:</label>
                                <input
                                    type="text"
                                    value={guestNames[index]}
                                    onChange={(e) => handleNameChange(index, e.target.value)}
                                    required
                                />
                            </div>
                            <div className="guest-height">
                                <label>Height (cm):</label>
                                <input
                                    type="number"
                                    value={guestHeights[index]}
                                    onChange={(e) => handleHeightChange(index, e.target.value)}
                                    required
                                    size={guestHeights[index] ? Math.max(1, guestHeights[index].length) : 1}
                                />
                            </div>
                        </div>
                    ))}

                    {/* Cottage selection moved here */}
                    {bookingType === 'public' && (
                        <div>
                            <label>Select Cottages:</label>
                            <div className="cottage-selection">
                                {Object.keys(cottagesInfo).map((cottage) => (
                                    <div key={cottage} className="cottage-option">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={cottage}
                                                checked={selectedCottages.includes(cottage)}
                                                onChange={() => handleCottageChange(cottage)}
                                            />
                                            {cottage} - ₱{cottagesInfo[cottage].price} (Capacity: {cottagesInfo[cottage].capacity} pax)
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Render event type input only for private bookings */}
                    {bookingType === 'private' && (
                        <div>
                            <label>Type of Event:</label>
                            <input
                                type="text"
                                placeholder="Enter event type"
                                required
                            />
                        </div>
                    )}

                    <button type="submit">Submit Booking</button>
                </form>
            </div>
        </div>
    );
}

export default Booking;
