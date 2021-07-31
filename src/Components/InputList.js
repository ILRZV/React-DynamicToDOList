import React, { Component } from "react";

class InputList extends Component {
  render() {
    return (
      <div>
        <div onClick={this.props.onClick} className="start">
          <div className="start_circle">
            <span className="start_circle_plus">+</span>
          </div>
        </div>
      </div>
    );
  }
}

export default InputList;
