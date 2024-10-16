import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Payment.css';

import gcashImg from '../assets/img/gcash.png'; // Replace with actual path to your image
import mayaImg from '../assets/img/maya.png';   // Replace with actual path to your image
import mastercardImg from '../assets/img/mastercard.png'; // Replace with actual path to your image
import visaImg from '../assets/img/visa.png'; // Replace with actual path to your image

function Payment() {
    const location = useLocation();
    const bookingDetails = location.state?.bookingDetails;
    
    const [paymentMethod, setPaymentMethod] = useState(''); // To track selected payment method
    const [paymentProcessing, setPaymentProcessing] = useState(false); // To simulate payment processing

    const handlePayment = () => {
        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        setPaymentProcessing(true);
        
        // Simulating a payment processing delay (replace this with real API call to payment gateway)
        setTimeout(() => {
            alert(`Payment successful using ${paymentMethod}!`);
            setPaymentProcessing(false);
            // Navigate or handle post-payment logic here, e.g., sending confirmation email
        }, 3000);
    };

    return (
        <div className="payment-container">
            <div className="overlay-payment">  
                <h1>Payment</h1>
                {bookingDetails ? (
                    <div className="payment-details">
                        <p><strong>Date:</strong> {bookingDetails.date}</p>
                        <p><strong>Number of Guests:</strong> {bookingDetails.numGuests}</p>
                        <p><strong></strong> {bookingDetails.guestDetails}</p>
                        <p><strong>Cottages:</strong> {bookingDetails.cottages}</p>
                        <p><strong>Total Price:</strong> ₱{bookingDetails.totalPrice}</p>
                        <p><strong>Email:</strong> {bookingDetails.guestEmail}</p>

                        <h2>Select Payment Method</h2>

                        {/* Payment Method Options with Images */}
                        <div className="payment-methods">
                            <label>
                                <input
                                    type="radio"
                                    value="GCash"
                                    checked={paymentMethod === 'GCash'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    style={{ display: 'none' }} // Hide the default radio button
                                />
                                <img
                                    src={gcashImg}
                                    alt="GCash"
                                    className={`payment-image ${paymentMethod === 'GCash' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('GCash')}
                                />
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Maya"
                                    checked={paymentMethod === 'Maya'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    style={{ display: 'none' }} // Hide the default radio button
                                />
                                <img
                                    src={mayaImg}
                                    alt="Maya"
                                    className={`payment-image ${paymentMethod === 'Maya' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('Maya')}
                                />
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="MasterCard"
                                    checked={paymentMethod === 'MasterCard'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    style={{ display: 'none' }} // Hide the default radio button
                                />
                                <img
                                    src={mastercardImg}
                                    alt="MasterCard"
                                    className={`payment-image ${paymentMethod === 'MasterCard' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('MasterCard')}
                                />
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="VISA"
                                    checked={paymentMethod === 'VISA'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    style={{ display: 'none' }} // Hide the default radio button
                                />
                                <img
                                    src={visaImg}
                                    alt="VISA"
                                    className={`payment-image ${paymentMethod === 'VISA' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('VISA')}
                                />
                            </label>
                        </div>

                        {/* Payment Button */}
                        <button
                            className="payment-button"
                            onClick={handlePayment}
                            disabled={paymentProcessing}
                        >
                            {paymentProcessing ? 'Processing Payment...' : 'Confirm and Pay'}
                        </button>
                    </div>
                ) : (
                    <p>No booking details available.</p>
                )}
            </div>
        </div>
    );
}

export default Payment;
