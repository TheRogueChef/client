import React, { useState, useEffect } from 'react';

const ChatBox = ({ currentUser }) => {
    const [messages, setMessages] = useState([]);

    const handleMessageSubmit = (message) => {
        const newMessage = {
            author: currentUser.firstName,
            content: message,
        };

        setMessages([...messages, newMessage]);
    };

    return (
        <div>
            {/* Render the chat messages */}
            {messages.map((message, index) => (
                <div key={index}>
                    <p>
                        {message.author}: {message.content}
                    </p>
                </div>
            ))}

            {/* Render the chat input */}
            <input type="text" placeholder="Type your message" />
            <button onClick={handleMessageSubmit}>Send</button>
        </div>
    );
};

export default ChatBox;

