import React from "react";
import "./display.css";
export default function display(props) {
  return (
    <div className="display">
      <p>{props.realTime}</p>
      {!props.active && (
        <input
          type="text"
          maxLength="5"
          onChange={props.change}
          value={props.value}
        />
      )}
    </div>
  );
}
