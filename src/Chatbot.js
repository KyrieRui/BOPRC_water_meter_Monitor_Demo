import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (prompt) => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8000/complete', {
        prompt,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      console.log(response);
      // const botReply = response?.data?.data;
      const botReply = response?.data?.data?.result;

      if (botReply) {
        setMessages((prevMessages) => [...prevMessages, { text: botReply, isBot: true }]);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { text: input, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    sendMessage(input);
    setInput("");
  };

  return (
      <div className="chatbot-container">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
              <div
                  key={index}
                  className={`message ${
                      message.user ? "user-message" : "ai-message"
                  }`}
              >
                {message.text}
              </div>
          ))}
        </div>
        <form className="chatbot-input-form" onSubmit={handleSubmit}>
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
          />
          <button type="submit">Send</button>
          {isLoading && <div className="loading-indicator">Loading...</div>}
        </form>
      </div>
  );
};

export default Chatbot;