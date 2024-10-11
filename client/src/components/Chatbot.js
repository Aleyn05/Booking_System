import React, { useEffect, useState } from 'react';

const Chatbot = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                // Check if the script is already loaded
                if (document.getElementById('botpenguin-script')) {
                    console.log("BotPenguin script already exists.");
                    resolve();
                    return;
                }

                // Create and append the script
                const script = document.createElement('script');
                script.src = src;
                script.defer = true;
                script.id = 'botpenguin-script'; // Track the script
                script.onload = () => {
                    console.log("BotPenguin script loaded successfully.");
                    resolve();
                };
                script.onerror = (e) => {
                    console.error(`Failed to load script: ${src}`, e);
                    reject(new Error(`Failed to load script: ${src}`));
                };
                document.body.appendChild(script);
            });
        };

        const initializeBotPenguin = async () => {
            try {
                await loadScript('https://cdn.botpenguin.com/website-bot.js');

                // Wait for BotPenguin to be available
                if (!window.BotPenguin) {
                    throw new Error("BotPenguin script loaded, but window.BotPenguin is not defined.");
                }

                window.BotPenguin.initialize({
                    botId: '6706201db561b00b97c70a3d', // Your bot ID
                    configuration: {
                        customStyle: {
                            color: '#000',
                        },
                    },
                });
                console.log("Chatbot initialized successfully.");
            } catch (error) {
                console.error("Error initializing the chatbot:", error);
            } finally {
                setLoading(false);
            }
        };

        // Call the function to load and initialize the chatbot
        initializeBotPenguin();

        // Cleanup function to remove the script when the component unmounts
        return () => {
            const script = document.getElementById('botpenguin-script');
            if (script) {
                document.body.removeChild(script);
                console.log("Chatbot script removed.");
            }
        };
    }, []);

    return (
        <div className="chatbot-container">
            {loading ? (
                <p>Chatbot is loading...</p>
            ) : (
                <p>Chatbot is ready to assist you!</p>
            )}
        </div>
    );
};

export default Chatbot;
