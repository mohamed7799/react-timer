import React from "react";
import "./buttons.css";
export default function buttons(props) {
  return (
    <div className="buttons">
      {!props.active && (
        <button onClick={props.start} className="buttons__start">
          Start
        </button>
      )}
      <button onClick={props.stop} className="buttons__reset">
        Reset
      </button>
    </div>
  );
}
