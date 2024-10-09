import React, { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        try {
            const script = document.createElement('script');
            script.id = 'messenger-widget-b';
            script.src = 'https://cdn.botpenguin.com/website-bot.js';
            script.defer = true;
            script.setAttribute('data-bot-id', '6706201db561b00b97c70a3d,670615db65fb7611293f479c');
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        } catch (error) {
            console.error("Error loading the chatbot script:", error);
        }
    }, []);
}

export default Chatbot;
