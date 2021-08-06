import { Component, useState } from "react";
import React from "react";
import ToDoApp from "./ToDoApp";
import Context from "./Components/ThemeContext";
import Menu from "./Components/Menu";

function App() {
  const [state, setState] = useState({ theme: "light" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openPage, setOpenPage] = useState("Tasks");
  const [toDoLists, setToDoLists] = useState([
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
  ]);

  let addList = () => {
    let lists = toDoLists.slice(0);
    lists.push({
      id: lists.length !== 0 ? lists.length : 0,
      name: "",
      tasks: [],
    });
    setToDoLists(lists);
  };

  let updateList = (list) => {
    const id = list.id;
    let lists = toDoLists.slice(0);
    let index = lists.find((element) => {
      if (element) {
        return element.id === id;
      }
      return false;
    }).id;
    lists[index].name = list.name;
    lists[index].tasks = list.tasks.slice(0);
    setToDoLists(lists);
  };

  let deleteList = (id) => {
    let lists = toDoLists.slice();
    delete lists[id];
    setToDoLists(lists);
  };

  function changeColor() {
    setState({
      theme: state.theme === "dark" ? "light" : "dark",
    });
  }

  const handleDrawerOpen = () => {
    setIsMenuOpen(true);
  };
  const handleDrawerClose = () => {
    setIsMenuOpen(false);
  };

  function changePage(title) {
    setOpenPage(title);
  }
  return (
    <div>
      <Menu
        changeColor={changeColor}
        open={isMenuOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        changePage={changePage}
      />
      {openPage === "Tasks" ? (
        <Context.Provider value={{ theme: state.theme }}>
          <ToDoApp
            theme={state.theme}
            onClick={handleDrawerClose}
            toDoLists={toDoLists}
            addList={addList}
            updateList={updateList}
            deleteList={deleteList}
          />
        </Context.Provider>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
