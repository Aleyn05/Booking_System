import { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'messenger-widget-b';
        script.src = 'https://cdn.botpenguin.com/website-bot.js';
        script.defer = true;
        
        // This line adds the data-bot-id attribute directly to the script tag
        script.setAttribute('data-bot-id', '6706201db561b00b97c70a3d,670615db65fb7611293f479c');

        // Handle script load error
        script.onerror = () => {
            console.error("Error loading the chatbot script.");
        };

        // Optional: Handle script load success
        script.onload = () => {
            console.log("Chatbot script loaded successfully.");
        };

        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div className="chatbot-container">Chatbot is loading...</div>; // Customize as needed
};

export default Chatbot;
