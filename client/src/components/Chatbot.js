import { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'messenger-widget-b';
        script.src = 'https://cdn.botpenguin.com/website-bot.js';
        script.defer = true;
        script.setAttribute('data-bot-id', '6706201db561b00b97c70a3d,670615db65fb7611293f479c');

        // Handle script load error
        script.onerror = () => {
            console.error("Error loading the chatbot script.");
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
}

export default Chatbot;
