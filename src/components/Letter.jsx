import React from "react";
import "../styles/letter.css";
const Letter = ({ letter, index, userInput }) => {
  const indexCaret = userInput?.length;

  return (
    <span
      className={`letter ${userInput?.at(index) === letter && "passed"} ${
        indexCaret === index && "current"
      }`}
    >
      {letter}
    </span>
  );
};

export default Letter;
