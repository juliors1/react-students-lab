import React from "react";

const Score = (props) => {
  return (
    <ul>
      {props.scores.map((scoreData) => (
        <li>
          Test Score Recieved: {scoreData.score} on {scoreData.date}
        </li>
      ))}
    </ul>
  );
};

export default Score;
