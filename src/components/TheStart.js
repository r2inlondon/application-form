import React from "react";

const TheStart = (props) => (
  <div className="the-start">
    <div className="start-txt">
      <p>Job Application Form Coded With React</p>
      <button className="the-button" onClick={props.TheStart}>
        START
      </button>
    </div>
  </div>
);

export default TheStart;
