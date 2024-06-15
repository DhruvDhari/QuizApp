import React from 'react';

const FullScreenPrompt = ({ onRequestFullScreen }) => {
  return (
    <div className="fullscreen-prompt">
      <h2>Please enable full-screen mode to start the quiz.</h2>
      <button onClick={onRequestFullScreen}>Enable Full Screen</button>
    </div>
  );
};

export default FullScreenPrompt;

