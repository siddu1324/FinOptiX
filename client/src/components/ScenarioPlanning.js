import React, { useState } from 'react';
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
    </div>
  );
};

export default ScenarioPlanning;
