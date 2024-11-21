import React from 'react';

const FullScreenPrompt = ({ onRequestFullScreen }) => {
  return (
    <div className="fullscreen-prompt">
    <a href="https://docs.google.com/document/d/1drm95GV94MvONoJacBNx4hfo_OjBhK03/edit?usp=drivesdk&ouid=106792302852462244170&rtpof=true&sd=true">Get prcv Practical File</a>
      <h2>Please enable full-screen mode to start the quiz.</h2>
      <button onClick={onRequestFullScreen}>Enable Full Screen</button>
    </div>
  );
};

export default FullScreenPrompt;

