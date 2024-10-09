import { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'messenger-widget-b';
        script.src = 'https://cdn.botpenguin.com/website-bot.js';
        script.defer = true;
        script.setAttribute('data-bot-id', '6706201db561b00b97c70a3d,670615db65fb7611293f479c');

        // Handle script load error
        script.onerror = (e) => {
            console.error("Error loading the chatbot script: ", e);
        };

        // Script load success
        script.onload = () => {
            console.log("Chatbot script loaded successfully.");

            // Ensure BotPenguin is available
            if (window.BotPenguin) {
                console.log("BotPenguin object found, initializing...");

                try {
                    // Check for any required initialization and configuration
                    window.BotPenguin.initialize({
                        botId: '6706201db561b00b97c70a3d,670615db65fb7611293f479c',
                        configuration: {
                            customStyle: {
                                color: '#000', // Example custom style if applicable
                            }
                        }
                    });
                } catch (error) {
                    console.error("Error during BotPenguin initialization: ", error);
                }
            } else {
                console.error("BotPenguin object not found after script load.");
            }
        };

        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div className="chatbot-container">Chatbot is loading...</div>;
};

export default Chatbot;
