import { Component } from "react";
import InputList from "./Components/InputList";
import NewList from "./Components/List";
import React from "react";
import Context from "./Components/ThemeContext";
import SwitchBox from "./Components/Switch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoLists: [
        // {
        //   id: 0,
        //   name: "Monday",
        //   tasks: [
        //     { id: 0, task: "Go for a walk with a dog", isMade: true },
        //     { id: 1, task: "Watch a film", isMade: false },
        //     { id: 2, task: "New JS tasks", isMade: true },
        //   ],
        // },
        // {
        //   id: 1,
        //   name: "world",
        //   tasks: [
        //     { id: 0, task: "Make new movee", isMade: true },
        //     { id: 1, task: "Answer questions", isMade: false },
        //     { id: 2, task: "Make a dinner", isMade: false },
        //   ],
        // },
      ],
      theme: "dark",
    };
  }

  addList = () => {
    this.setState((state) => {
      let lists = state.toDoLists.slice(0);
      lists.push({
        id: lists.length !== 0 ? lists.length : 0,
        name: "",
        tasks: [],
      });
      return { toDoLists: lists };
    });
  };

  updateList = (list) => {
    const id = list.id;
    this.setState((state) => {
      let lists = state.toDoLists.slice(0);
      let index = lists.find((element) => {
        if (element) {
          return element.id === id;
        }
      }).id;
      lists[index].name = list.name;
      lists[index].tasks = list.tasks.slice(0);
      return lists;
    });
  };

  deleteList = (id) => {
    console.log(id);
    this.setState((state) => {
      let lists = state.toDoLists.slice();
      console.log(lists);
      delete lists[id];
      console.log(lists);
      return { toDoLists: lists };
    });
    console.log(this.state.toDoLists);
  };

  changeColor = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark",
    });
  };
  render() {
    const lists = this.state.toDoLists;
    const classes = [];
    if (this.state.theme === "dark") {
      classes.push("dark_theme_background");
    } else {
      classes.push("light_theme_background");
    }
    return (
      <Context.Provider value={{ theme: this.state.theme }}>
        <div className="control_panel">
          <SwitchBox onChange={this.changeColor}></SwitchBox>
          <span style={{ color: "white" }}>Change Color</span>
        </div>
        <div className={classes.join(" ") + " body"}>
          {lists.map((element) => (
            <NewList
              key={element.id}
              updateList={this.updateList}
              deleteList={this.deleteList}
              list={element}
            />
          ))}
          <InputList onClick={this.addList} />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
