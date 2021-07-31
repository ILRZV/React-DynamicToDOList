import { Component } from "react";
import Task from "./Task";
import InputTask from "./InputTask";

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isShownInput: true,
      tasks: [
        { id: 0, task: "Make new movee", isMade: true },
        { id: 1, task: "Answer questions", isMade: false },
        { id: 2, task: "Make a dinner", isMade: false },
      ],
    };
  }
  addTask = (title) => {
    this.setState((state) => {
      let tasks = state.tasks.slice(0);
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        task: title,
        isMade: true,
      });
      console.log(tasks);
      return { tasks: tasks };
    });
  };

  doneTask = (id) => {
    let idNumber = this.state.tasks.map((element) => element.id).indexOf(id);
    console.log(this.state.tasks);
    this.setState((state) => {
      let { tasks } = state;
      tasks[idNumber].isMade = false;
      return tasks;
    });
  };

  deleteTask = (id) => {
    let idNumber = this.state.tasks.map((element) => element.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      delete tasks[idNumber];
      return tasks;
    });
  };

  handleEnter = (event) => {
    if (event.key === "Enter") {
      this.setState({ name: this.state.name, isShownInput: false });
    }
  };

  inputChange = (event) => {
    this.setState({ name: event.target.value });
  };
  nameHead(bool) {
    if (bool) {
      return (
        <input
          className="app_head_input"
          autoFocus={true}
          onKeyPress={this.handleEnter}
          onChange={this.inputChange}
        ></input>
      );
    } else {
      return <div className="app_head_counter">{this.state.name}</div>;
    }
  }

  render() {
    const tasks = this.props.list.tasks;
    const activeTasks = tasks.filter((element) => element.isMade === true);
    const doneTasks = tasks.filter((element) => element.isMade === false);
    console.log(this.props.list);
    return (
      <div>
        <div className="App">
          <div className="app_head">
            {this.nameHead(this.state.isShownInput)}
            <h3 className="app_head_counter">
              Active tasks: {activeTasks.length}
            </h3>
          </div>

          {activeTasks.map((element) => (
            <Task
              doneTask={() => this.doneTask(element.id)}
              deleteTask={() => this.deleteTask(element.id)}
              task={element}
              key={element.id}
            />
          ))}
          {doneTasks.map((element) => (
            <Task
              doneTask={() => this.doneTask(element.id)}
              deleteTask={() => this.deleteTask(element.id)}
              task={element}
              key={element.id}
            />
          ))}
          <InputTask addTask={this.addTask} />
        </div>
      </div>
    );
  }
}

export default NewList;
