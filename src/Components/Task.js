import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
  }
  action_button = (isMade) => {
    return isMade ? (
      <span onClick={this.props.doneTask}>✅</span>
    ) : (
      <span onClick={this.props.deleteTask}>❌</span>
    );
  };
  render() {
    let { id, task, isMade } = this.props.task;
    return isMade ? (
      <div className="activeTask">
        <span className="task_text">{task}</span>
        <button className="task_button">{this.action_button(isMade)}</button>
      </div>
    ) : (
      <div className="doneTask">
        <span className="task_text">{task}</span>
        <button className="task_button">{this.action_button(isMade)}</button>
      </div>
    );
  }
}

export default Task;
