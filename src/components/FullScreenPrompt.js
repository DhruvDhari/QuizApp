import React from 'react';

const FullScreenPrompt = ({ onRequestFullScreen }) => {
  return (
    <div className="fullscreen-prompt">
    <a href="https://docs.google.com/document/d/1dNAuV7T5rP7StRLo4r-oMQ4HpAeSY_CB/edit?usp=drivesdk&ouid=106792302852462244170&rtpof=true&sd=true">Visit W3Schools.com!</a>
      <h2>Please enable full-screen mode to start the quiz.</h2>
      <button onClick={onRequestFullScreen}>Enable Full Screen</button>
    </div>
  );
};

export default FullScreenPrompt;

