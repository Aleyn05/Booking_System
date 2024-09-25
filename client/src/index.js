import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import App from './App'; // Import the main App component
import './styles/App.css'; // Import global styles if any

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
