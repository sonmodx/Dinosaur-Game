import React from "react";
import "./styles/show-stat.css";

const ShowStat = ({ clearSetting, userInput, correctText, seconds }) => {
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
  const NWPM = GWPM - countMismatches(userInput, correctText) / 5 / MIN;
  /* Accuracy = (Net WPM / Gross WPM ) */
  const accuracy = (NWPM / GWPM) * 100;

  return (
    <div className="show-stat">
      <h1 className="stat">STATS</h1>
      <div className="row">
        <p className="net-wpm">
          Net WPM: <span>{NWPM.toFixed(2)}</span>
        </p>
        <p className="accuracy">
          Accuracy: <span>{accuracy ? accuracy.toFixed(2) : "0"}%</span>
        </p>
      </div>

      <button className="back-btn" onClick={() => clearSetting()}>
        BACK
      </button>
    </div>
  );
};

export default ShowStat;
