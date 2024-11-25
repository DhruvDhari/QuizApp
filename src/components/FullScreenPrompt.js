import React from 'react';

const FullScreenPrompt = ({ onRequestFullScreen }) => {
  return (
    <div className="fullscreen-prompt">
    <a href=" https://drive.google.com/file/d/1eyMFZaYfR7AtoP-r4q0fW0fBQ0a_Jden/view?usp=drivesdk ">Get ngw Practical File</a>
      <h2>Please enable full-screen mode to start the quiz.</h2>
      <button onClick={onRequestFullScreen}>Enable Full Screen</button>
    </div>
  );
};

export default FullScreenPrompt;

