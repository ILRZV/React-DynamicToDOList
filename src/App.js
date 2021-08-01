import { Component } from "react";
import InputList from "./Components/InputList";
import NewList from "./Components/List";

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
  render() {
    const lists = this.state.toDoLists;
    return (
      <div>
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
    );
  }
}

export default App;
