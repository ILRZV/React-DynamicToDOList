import { Component } from "react";
import Task from "./Task";
import InputTask from "./InputTask";

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isShownInput: true,
    };
  }
  addTask = (title) => {
    let list = this.props.list;
    list.tasks.push({
      id: list.tasks.length !== 0 ? list.tasks.length : 0,
      task: title,
      isMade: true,
    });
    this.props.updateList(list);
  };

  doneTask = (id) => {
    let list = this.props.list;
    let idNumber = list.tasks.map((element) => element.id).indexOf(id);
    list.tasks[idNumber].isMade = false;
    this.props.updateList(list);
  };

  deleteTask = (id) => {
    let list = this.props.list;
    let idNumber = list.tasks.map((element) => element.id).indexOf(id);
    delete list.tasks[idNumber];
    this.props.updateList(list);
  };

  handleEnter = (event) => {
    if (event.key === "Enter") {
      let list = this.props.list;
      list.name = this.state.name;
      this.props.updateList(list);
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

  deleteList = (id) => {
    this.props.deleteList(id);
  };
  render() {
    const tasks = this.props.list.tasks;
    const activeTasks = tasks.filter((element) => element.isMade === true);
    const doneTasks = tasks.filter((element) => element.isMade === false);
    return (
      <div>
        <div className="App">
          <div className="app_head">
            {this.nameHead(this.state.isShownInput)}
            <p className="app_head_counter">
              Active tasks: {activeTasks.length}
              <button
                className="delete_button"
                onClick={() => this.deleteList(this.props.list.id)}
              >
                <span>✖</span>
              </button>
            </p>
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
