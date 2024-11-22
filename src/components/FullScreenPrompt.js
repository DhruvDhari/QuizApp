import React from 'react';

const FullScreenPrompt = ({ onRequestFullScreen }) => {
  return (
    <div className="fullscreen-prompt">
    <a href="https://docs.google.com/document/d/1eAtdvW2MqZV-6ObCrjXjEaIUcITpvI95/edit?usp=drivesdk&ouid=106792302852462244170&rtpof=true&sd=true">Get dwdm Practical File</a>
      <h2>Please enable full-screen mode to start the quiz.</h2>
      <button onClick={onRequestFullScreen}>Enable Full Screen</button>
    </div>
  );
};

export default FullScreenPrompt;

