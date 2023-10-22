import React, { useEffect, useState } from "react";
import "./styles/typing-test.css";
import Letter from "./Letter";
import ShowStat from "./ShowStat";
const TypingTest = () => {
  const [userInput, setUserInput] = useState([]);
  const correctText = "but school everyday is good for you too my love";
  const [isFinish, setIsFinish] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
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
    if (!isStart) return;
    console.log("START");
    const time = setInterval(() => {
      _sec -= 1;
      setSeconds(_sec);
      if (isFinish) {
        _sec = 0;
      }
      if (_sec === 0) {
        setIsFinish(true);
        setIsStart(false);
        clearInterval(time);
        return;
      }
    }, 1000);
    return () => clearInterval(time);
  }, [isFinish, isStart]);

  useEffect(() => {
    const userInputString = userInput.join("");
    if (userInputString.length === correctText.length) {
      setIsFinish(true);
    }
  }, [userInput]);
  if (isFinish)
    return (
      <div className="typing-test">
        <ShowStat
          clearSetting={clearSetting}
          userInput={userInput?.join("")}
          correctText={correctText}
          seconds={selectSeconds - seconds}
        />
      </div>
    );

  return (
    <div className="typing-test">
      <p className="time">{seconds}</p>

      <div className={`wrapper ${!isFocus && "blur"}`}>
        <input
          type="text"
          onInput={(e) => {
            setUserInput(e.target.value.split(""));
            setIsStart(true);
          }}
          autoFocus={true}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
        />
        <div className="show-text">
          {correctText?.split("")?.map((letter, idx) => (
            <Letter
              key={idx}
              letter={letter}
              index={idx}
              userInput={userInput}
              isFocus={isFocus}
            />
          ))}
        </div>
      </div>
      {!isFocus ? (
        <p className="type-to-start">Click to focus!</p>
      ) : (
        !isStart && <p className="type-to-start">Type to start!</p>
      )}
    </div>
  );
};

export default TypingTest;
