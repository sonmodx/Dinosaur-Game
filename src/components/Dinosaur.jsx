import React from "react";
import "../styles/dinosaur.css";
import imgDinosaur from "../assets/Dinosaur.png";
const Dinosaur = () => {
  return (
    <div className="dinosaur">
      <img src={imgDinosaur} alt="dinosaur" />
    </div>
  );
};

export default Dinosaur;
