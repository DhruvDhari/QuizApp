import React from 'react';

const FullScreenPrompt = ({ onRequestFullScreen }) => {
  return (
    <div className="fullscreen-prompt">
    <a href="https://drive.google.com/file/d/1fpgBWTTm3FLhHNbIiW9M58x5w6Qozes8/view?usp=drivesdk">Get ml Practical File</a>
      <h2>Please enable full-screen mode to start the quiz.</h2>
      <button onClick={onRequestFullScreen}>Enable Full Screen</button>
    </div>
  );
};

export default FullScreenPrompt;

