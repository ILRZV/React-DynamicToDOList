import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Context from "./ThemeContext";

function Task(props) {
  const themes = useContext(Context);
  const classesActive = [];
  const classesDone = [];
  if (themes.theme === "dark") {
    classesActive.push("dark_theme_active_task");
    classesDone.push("dark_theme_done_task");
  }

  let action_button = (isMade) => {
    return isMade ? (
      <span onClick={props.doneTask}>❌</span>
    ) : (
      <span onClick={props.deleteTask}>🗑️</span>
    );
  };
  let { id, task, isMade } = props.task;
  return isMade ? (
    <div className={"activeTask " + classesActive.join(" ")}>
      <span className="task_text">{task}</span>
      <button className="task_button">{action_button(isMade)}</button>
    </div>
  ) : (
    <div className={"doneTask " + classesDone.join(" ")}>
      <span className="task_text line_throught ">{task}</span>
      <button className="task_button">{action_button(isMade)}</button>
    </div>
  );
}

export default Task;
