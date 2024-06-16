import React from 'react';

const Score = ({ score, totalQuestions }) => {
  return (
    <div >
      <h1>Your Score</h1>
      <button className='score'>You scored {score} out of {totalQuestions}</button>
    </div>
  );
};

export default Score;
