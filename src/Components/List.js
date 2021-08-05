import React, { useState, useContext } from "react";
import Task from "./Task";
import InputTask from "./InputTask";
import Context from "./ThemeContext";

function NewList(props) {
  const [state, setstate] = useState({
    name: "",
    isShownInput: true,
  });
  function addTask(title) {
    let list = props.list;
    list.tasks.push({
      id: list.tasks.length !== 0 ? list.tasks.length : 0,
      task: title,
      isMade: true,
    });
    props.updateList(list);
  }

  function doneTask(id) {
    let list = props.list;
    let idNumber = list.tasks.map((element) => element.id).indexOf(id);
    list.tasks[idNumber].isMade = false;
    props.updateList(list);
  }

  function deleteTask(id) {
    let list = props.list;
    let idNumber = list.tasks.map((element) => element.id).indexOf(id);
    delete list.tasks[idNumber];
    props.updateList(list);
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      let list = props.list;
      list.name = state.name;
      console.log(list);
      props.updateList(list);
      setstate({ name: state.name, isShownInput: false });
    }
  }

  function inputChange(event) {
    if (event.target.value.length < 20) {
      setstate({ name: event.target.value, isShownInput: state.isShownInput });
    } else {
      event.target.value = event.target.value.slice(0, 20);
    }
  }

  function nameHead(bool) {
    if (bool) {
      return (
        <input
          className="app_head_input"
          autoFocus={true}
          onKeyPress={handleEnter}
          onChange={inputChange}
        ></input>
      );
    } else {
      return <div className="app_head_counter">{state.name}</div>;
    }
  }

  function deleteList(id) {
    props.deleteList(id);
  }

  const tasks = props.list.tasks;
  const activeTasks = tasks.filter((element) => element.isMade === true);
  const doneTasks = tasks.filter((element) => element.isMade === false);
  const themes = useContext(Context);
  const classes = [];
  if (themes.theme === "dark") {
    classes.push("dark_theme_list");
  }
  return (
    <div>
      <div className="App">
        <div className={"app_head " + classes.join(" ")}>
          {nameHead(state.isShownInput)}
          <p className="app_head_counter">
            Active tasks: {activeTasks.length}
            <button
              className="delete_button"
              onClick={() => deleteList(props.list.id)}
            >
              <span>✖</span>
            </button>
          </p>
        </div>

        {activeTasks.map((element) => (
          <Task
            doneTask={() => doneTask(element.id)}
            deleteTask={() => deleteTask(element.id)}
            task={element}
            key={element.id}
          />
        ))}
        {doneTasks.map((element) => (
          <Task
            doneTask={() => doneTask(element.id)}
            deleteTask={() => deleteTask(element.id)}
            task={element}
            key={element.id}
          />
        ))}
        <InputTask addTask={addTask} />
      </div>
    </div>
  );
}

export default NewList;
