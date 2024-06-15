import React from 'react';

const Question = ({ questionData, onOptionClick, questionNumber, totalQuestions, selectedOption }) => {
  return (
    <div className="question">
      <h2>Question {questionNumber} of {totalQuestions}</h2>
      <p>{questionData.question}</p>
      <div className="options">
        {questionData.options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => onOptionClick(option)}
            className={selectedOption === option ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
