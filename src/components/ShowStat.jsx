import React, { useState } from "react";

const ShowStat = ({ clearSetting, userInput, correctText, seconds }) => {
  console.log(correctText);
  console.log(userInput);
  console.log(seconds);
  const countMismatches = (word1, word2) => {
    return word1.split("").reduce((mismatchCount, char1, index) => {
      return char1 !== word2[index] ? mismatchCount + 1 : mismatchCount;
    }, 0);
  };
  const MIN = seconds / 60;
  const GWP = userInput?.length / 5.0;
  const GWPM = GWP / MIN;
  /* Gross WPM is: all characters in line / 5 / Time in Minutes */

  /* Net WPM is:  GWPM - Number of Errors / Time in Minutes */
  console.log(countMismatches(userInput, correctText));
  console.log(GWPM);
  const NWPM = GWPM - countMismatches(userInput, correctText) / 5 / MIN;
  /* Accuracy = (Net WPM / Gross WPM ) */
  const accuracy = (NWPM / GWPM) * 100;

  return (
    <div>
      <h1>STATS</h1>
      <p>{GWPM.toFixed(2)}</p>
      <p>{NWPM.toFixed(2)}</p>
      <p>{accuracy ? accuracy.toFixed(2) : "0"}%</p>
      <button onClick={() => clearSetting()}>BACK</button>
    </div>
  );
};

export default ShowStat;
