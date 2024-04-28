import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
import axios from 'axios';
import './ScenarioChat.css'; // Ensure CSS styles are correctly defined

const scenarioQuestions = [
  "What if sales increase by 10% next quarter?",
  "What if expenses are reduced by 20%?",
  "What if we increase the marketing budget by 15%?",
  "What if hiring is frozen for the next six months?"
];

const ScenarioPlanning = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskClick = async () => {
    if (!question) {
      setResponse('Please enter a question.');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5001/scenario', { question });
      setResponse(res.data.answer);
    } catch (error) {
      console.error('Error asking question:', error);
      setResponse(`Error: ${error.response ? error.response.data.error : 'Server unreachable'}`);
    }
  };

  const handlePresetQuestion = (presetQuestion) => {
    setQuestion(presetQuestion);
    handleAskClick();
  };

  return (
    <div className="chat-interface">
      <h1>Scenario Planning</h1>
      <input
        type="text"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Ask a 'what-if' question"
      />
      <button onClick={handleAskClick}>Ask</button>
      <div className="response">{response}</div>
      <div className="presets">
        {scenarioQuestions.map((q, index) => (
          <button key={index} onClick={() => handlePresetQuestion(q)}>{q}</button>
        ))}
      </div>
>>>>>>> ba793adef9258daac4b89f246735957da14728a1
    </div>
  );
};

<<<<<<< HEAD
export default ScenarioChat;
=======
export default ScenarioPlanning;
>>>>>>> ba793adef9258daac4b89f246735957da14728a1
