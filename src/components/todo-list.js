import React from "react";
import TodoItem from "./todo-item";
import './todo-list.css';

const TodoList = (props) => {
  if(props.items.length !== 0) {
    return (
      <ul>
        {props.items.map((item, index) => {
          return (
            <TodoItem
              checkboxHandler={props.checkboxHandler}
              removeItem={props.removeItem}
              key={index.toString()}
              item={item}
              index={index}
            ></TodoItem>
          );
        })}
      </ul>
    );
  } else {
    return (
      <div>
        <p className="no-todos">No Tasks</p>
      </div>
    )
  }
};

export default TodoList;
