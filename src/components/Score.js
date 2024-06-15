import React from 'react';

const Score = ({ score, totalQuestions }) => {
  return (
    <div>
      <h1>Your Score</h1>
      <p>You scored {score} out of {totalQuestions}</p>
    </div>
  );
};

export default Score;
