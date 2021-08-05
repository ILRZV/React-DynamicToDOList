import React, { useContext } from "react";
import Context from "./ThemeContext";
function InputTask(props) {
  const [input, setInput] = React.useState("");
  function addTask() {
    if (input.trim()) {
      props.addTask(input);
    }
    setInput("");
  }
  function handleEnter(event) {
    if (event.key === "Enter") addTask();
  }

  function inputChange(event) {
    if (event.target.value.length < 50) {
      setInput(event.target.value);
    } else {
      event.target.value = event.target.value.slice(0, 20);
    }
  }
  const classes = [];
  if (useContext(Context).theme === "dark") {
    classes.push("dark_theme_list");
  }
  return (
    <div className={"input " + classes.join(" ")}>
      <input
        onKeyPress={handleEnter}
        onChange={inputChange}
        value={input}
        className="input_input"
      ></input>
      <button onClick={addTask} className="input_button">
        Add
      </button>
    </div>
  );
}

export default InputTask;
