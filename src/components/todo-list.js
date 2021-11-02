import React from 'react'; // eslint-disable-line no-unused-vars
import TodoItem from './todo-item.js'; // eslint-disable-line no-unused-vars
import './todo-list.css';

const TodoList = (props) => {
  function outputItems(item, index) {
    return (
      <TodoItem
        checkboxHandler={props.checkboxHandler}
        removeItem={props.removeItem}
        key={index.toString()}
        item={item}
        index={index}
      ></TodoItem>
    );
  }

  if (props.items.length !== 0) {
    return (
      <ul>
        {props.items.map((item, index) => outputItems(item, index))}
      </ul>
    );
  } else { // eslint-disable-line no-else-return
    return (
      <div>
        <p className="no-todos">No Tasks</p>
      </div>
    );
  }
};

export default TodoList;
