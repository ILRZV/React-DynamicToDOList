import React, { useContext } from "react";
import Context from "./ThemeContext";

function InputList(props) {
  return (
    <div>
      <div onClick={props.onClick} className="start">
        <div className="start_circle">
          <span className="start_circle_plus">+</span>
        </div>
      </div>
    </div>
  );
}

export default InputList;
