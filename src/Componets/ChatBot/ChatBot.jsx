import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';



const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSend = () => {
        if (newMessage.trim()) {
            const userMessage = { text: newMessage, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setNewMessage('');

            setTimeout(() => {
                const botMessage = { text: 'What seems to be the problem?', sender: 'bot' };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }, 1000);
        }
    };

    return (
        <div>
            <Button className='rounded-full bg-white ' onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot">
                    <path d="M12 8V4H8"/>
                    <rect width="16" height="12" x="4" y="8" rx="2"/>
                    <path d="M2 14h2"/>
                    <path d="M20 14h2"/>
                    <path d="M15 13v2"/>
                    <path d="M9 13v2"/>
                </svg>
            </Button>

            {isOpen && (
              <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-green-500 bg-opacity-50 flex items-end justify-end "
          >
          
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md m-4">
                        <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-b">
                            <div className='text-black'>
                                <p className="font-bold text-lg">Devin</p>
                                <p className="text-sm">How can I help you</p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="p-4 h-80 overflow-y-auto rounded-sm">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <p
                                        className={`p-2 rounded-lg inline-block ${message.sender === 'user' ? 'text-black rounded-sm' : 'bg-white text-black rounded-sm'}`}
                                    >
                                        {message.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center p-2 border-t bg-gray-100">
                            <input
                                type="text"
                                className="flex-grow p-2 border rounded-lg"
                                placeholder="Type your message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button onClick={handleSend} className="ml-2 px-4 py-2 bg-blue-500 text-rounded">
                                Send
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ChatBot;
