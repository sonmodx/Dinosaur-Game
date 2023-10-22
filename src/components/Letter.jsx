import React from "react";
import "./styles/letter.css";
const Letter = ({ letter, index, userInput, isFocus }) => {
  const indexCaret = userInput?.length;

  return (
    <span
      className={`letter ${userInput?.at(index) === letter && "passed"} ${
        indexCaret === index && isFocus && "current"
      }`}
    >
      {letter}
    </span>
  );
};

export default Letter;
