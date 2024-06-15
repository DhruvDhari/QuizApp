import React, { useState, useEffect } from 'react';
import './App.css';
import FullScreenPrompt from './components/FullScreenPrompt';
import Question from './components/Question';
import Timer from './components/Timer';
import ScoreScreen from './components/Score';
import questions from './questions.json';

const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(document.fullscreenElement != null);
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const savedQuestion = parseInt(localStorage.getItem('currentQuestion'), 10);
    return !isNaN(savedQuestion) ? savedQuestion : 0;
  });
  const [timer, setTimer] = useState(() => {
    const savedTimer = parseInt(localStorage.getItem('timer'), 10);
    return !isNaN(savedTimer) ? savedTimer : 600; // 10 minutes in seconds
  });
  const [answers, setAnswers] = useState(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('answers'));
    return savedAnswers || {};
  });
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(document.fullscreenElement != null);
      if (!document.fullscreenElement && !isQuizCompleted) {
        alert('Please enable full-screen mode to continue the quiz.');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isQuizCompleted]);

  useEffect(() => {
    localStorage.setItem('currentQuestion', currentQuestion);
    localStorage.setItem('timer', timer);
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [currentQuestion, timer, answers]);

  const handleOptionClick = (option) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = { ...prevAnswers, [currentQuestion]: option };
      localStorage.setItem('answers', JSON.stringify(updatedAnswers));
      return updatedAnswers;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score += 1;
      }
    });
    setScore(score);
  };

  const handleSubmit = () => {
    const unansweredQuestions = questions.length - Object.keys(answers).length;
    if (unansweredQuestions > 0) {
      setShowModal(true);
    } else {
      finalizeQuiz();
    }
  };

  const finalizeQuiz = () => {
    calculateScore();
    setIsQuizCompleted(true);
  };

  const handleTimeUp = () => {
    finalizeQuiz();
    alert('Time is up!');
  };

  const requestFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  const closeModal = () => setShowModal(false);

  if (!isFullScreen && !isQuizCompleted) {
    return <FullScreenPrompt onRequestFullScreen={requestFullScreen} />;
  }

  if (isQuizCompleted) {
    return <ScoreScreen score={score} totalQuestions={questions.length} />;
  }

  return (
    <div>
      <h1>Quiz</h1>
      <Timer initialTime={timer} onTimeUp={handleTimeUp} />
      <div className="question-container">
        <Question 
          questionData={questions[currentQuestion]} 
          onOptionClick={handleOptionClick} 
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          selectedOption={answers[currentQuestion]}
        />
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>Previous</button>
        <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>Next</button>
      </div>
      <button onClick={handleSubmit}>Submit</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>{questions.length - Object.keys(answers).length} questions are not attempted. Are you sure you want to submit?</p>
            <button onClick={finalizeQuiz}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
