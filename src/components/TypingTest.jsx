import React, { useEffect, useState } from "react";
import "../styles/typing-test.css";
import Letter from "./Letter";
import ShowStat from "./ShowStat";
const TypingTest = () => {
  const [userInput, setUserInput] = useState([]);
  const correctText = "but school ";
  const [isFinish, setIsFinish] = useState(false);
  const [selectSeconds, setSelectSeconds] = useState(5);
  const [seconds, setSeconds] = useState(5);

  const clearSetting = () => {
    setIsFinish(false);
    setSeconds(5);
    setSelectSeconds(5);
    setUserInput([]);
  };

  useEffect(() => {
    let _sec = selectSeconds;
    const time = setInterval(() => {
      if (isFinish) {
        _sec = 0;
      }
      if (_sec === 0) {
        setIsFinish(true);
        clearInterval(time);
        return;
      }
      _sec -= 1;
      setSeconds(_sec);
    }, 1000);
    return () => clearInterval(time);
  }, [isFinish]);

  useEffect(() => {
    const userInputString = userInput.join("");
    if (userInputString.length === correctText.length) {
      setIsFinish(true);
    }
  }, [userInput]);
  if (isFinish)
    return (
      <ShowStat
        clearSetting={clearSetting}
        userInput={userInput?.join("")}
        correctText={correctText}
        seconds={selectSeconds - seconds}
      />
    );
  return (
    <div className="typing-test">
      <p className="time">{seconds}</p>

      <div className="wrapper">
        <input
          type="text"
          onInput={(e) => setUserInput(e.target.value.split(""))}
          autoFocus={true}
        />
        <div className="show-text">
          {correctText?.split("")?.map((letter, idx) => (
            <Letter
              key={idx}
              letter={letter}
              index={idx}
              userInput={userInput}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
