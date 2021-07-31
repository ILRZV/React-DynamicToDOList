import { Component } from "react";
import InputList from "./Components/InputList";
import NewList from "./Components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoLists: [
        {
          id: 0,
          name: "hello",
          tasks: [
            { id: 0, task: "Go for a walk with a dog", isMade: true },
            { id: 1, task: "Watch a film with friends", isMade: false },
            { id: 2, task: "Run form troubles", isMade: true },
          ],
        },
        {
          id: 1,
          name: "world",
          tasks: [
            { id: 0, task: "Make new movee", isMade: true },
            { id: 1, task: "Answer questions", isMade: false },
            { id: 2, task: "Make a dinner", isMade: false },
          ],
        },
      ],
    };
  }

  addList = () => {
    this.setState((state) => {
      let lists = state.toDoLists.slice(0);
      lists.push({
        name: "pop",
        tasks: [
          { id: 0, task: "124142", isMade: true },
          { id: 1, task: "153135135", isMade: false },
          { id: 2, task: "122234", isMade: true },
        ],
      });
      return { toDoLists: lists };
    });
  };

  updateList = (list) => {
    const id = list.id;
    this.setState((state) => {
      const lists = state.slice(0);
      let index = lists.find((element) => element.id == id);
      lists[index].name = list.name;
      lists[index].tasks = lists.tasks.slice(0);
      return lists;
    });
  };

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
  render() {
    const lists = this.state.toDoLists;
    return (
      <div>
        {lists.map((element) => (
          <NewList updateList={this.updateList} list={element} />
        ))}
        <InputList onClick={this.addList} />
      </div>
    );
  }
}

export default App;
