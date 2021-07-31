import React, { Component } from "react";

class InputTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  addTask = () => {
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: "" });
    }
  };
  handleEnter = (event) => {
    if (event.key === "Enter") this.addTask();
  };

  inputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    const { input } = this.state;
    return (
      <div className="input">
        <input
          onKeyPress={this.handleEnter}
          onChange={this.inputChange}
          value={input}
          className="input_input"
        ></input>
        <button onClick={this.addTask} className="input_button">
          Add
        </button>
      </div>
    );
  }
}

export default InputTask;
