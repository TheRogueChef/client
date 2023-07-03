import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetchAllChats();
    }, []);

    const fetchAllChats = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/allChats');
            const { chats } = response.data;
            setMessages(chats.slice(-6));
        } catch (error) {
            console.error(error);
        }
    };

    const handleMessageSubmit = async (event) => {
        event.preventDefault();

        if (inputMessage.trim() !== '') {
            const newMessage = {
                author: username || 'Guest',
                content: inputMessage,
            };

            try {
                await axios.post('http://localhost:8000/api/allChats', newMessage);
                setMessages((prevMessages) => [...prevMessages.slice(-5), newMessage]);
                setInputMessage('');
            } catch (error) {
                console.error(error);
            }
        }
    };


    return (
        <div className="ChatBorder">
            <div className='screen'>
                {messages.map((message, index) => (
                    <div key={index}>
                        <p>
                            {message.author}: {message.content}
                        </p>
                    </div>
                ))}
            </div>
            <div>
                <form onSubmit={handleMessageSubmit}>

                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message"
                        style={{ width:'95%',marginLeft: '13px', marginBottom: '10px', borderRadius: '5px', backgroundColor: 'transparent', color: 'whitesmoke'}} 
                    />
                    <br/>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Your Name"
                        style={{ width:'40%', marginLeft: '13px', marginRight: '115px', borderRadius: '5px', backgroundColor: 'transparent', color: 'whitesmoke'}} 
                    />
                    <button className='btn' type="submit" style={{ marginLeft: '20px', marginBottom: '5px'}}>Post</button>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;



