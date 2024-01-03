import React from "react";

export const ProgressBar = ({
  totalQuestions,
  solvedQuestions,
  solvedColor,
  remainingColor,
}) => {
  // Calculate the percentage of solved questions
  const percentageSolved = (solvedQuestions / totalQuestions) * 100;

  // Define inline styles
  const progressBarStyle = {
    width: "100%",
    height: "9px",
    backgroundColor: remainingColor,
    borderRadius: "10px",
    overflow: "hidden",
  };

  const progressStyle = {
    width: `${percentageSolved}%`,
    height: "100%",
    backgroundColor: solvedColor,
    borderRadius: "10px",
    transition: "width 0.3s ease",
  };

  return (
    <div style={progressBarStyle}>
      <div style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
