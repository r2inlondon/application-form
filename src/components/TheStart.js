import React from "react";

const TheStart = (props) => (
  <div className="the-start bg">
    <div className="start-txt">
      <p>Job aplication form coded with React</p>
      <button className="the-button" onClick={props.TheStart}>
        Start
      </button>
    </div>
  </div>
);

export default TheStart;
