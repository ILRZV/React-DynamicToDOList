import React from "react";

function Main(props) {
  const lists = props.toDoLists;
  const classes = [];
  const theme = props.theme;
  if (theme === "dark") {
    classes.push("dark_theme_background");
  } else {
    classes.push("light_theme_background");
  }
  return (
    <div className={classes.join(" ") + " body"} onClick={props.onClick}>
      {lists.map((element) => (
        <NewList
          key={element.id}
          updateList={props.updateList}
          deleteList={props.deleteList}
          list={element}
        />
      ))}
      <InputList onClick={props.addList} />
    </div>
  );
}

export default Main;
