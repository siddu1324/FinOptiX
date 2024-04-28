import React, { useState } from 'react';
import './ScenarioChat.css';

const ScenarioChat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendChat = (message) => {
    setMessages([...messages, { text: message, fromUser: true }]);
    setInput('');

    // Here, you would send the message to the OpenAI API and wait for a response
    // For now, it's just echoing the user input as a bot response for demo purposes
    setMessages((prevMessages) => [...prevMessages, { text: `Echo: ${message}`, fromUser: false }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      sendChat(input);
    }
  };

  return (
    <div className="scenario-chat-container">
      <h1 className="scenario-chat-header">Scenarios</h1>
      <div className="scenario-chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.fromUser ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="scenario-chat-form">
        <input
          type="text"
          className="scenario-chat-input"
          placeholder="Ask a 'what-if' question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="scenario-chat-submit">Send</button>
      </form>
      <div className="scenario-chat-suggestions">
        <button onClick={() => sendChat('What if sales increase by 10%?')} className="suggestion-button">Sales +10%</button>
        <button onClick={() => sendChat('What if expenses decrease by 20%?')} className="suggestion-button">Expenses -20%</button>
        <button onClick={() => sendChat('What if we introduce a new product line?')} className="suggestion-button">New Product Line</button>
      </div>
    </div>
  );
};

export default ScenarioChat;
