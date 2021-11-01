import React from "react";

const TodoItem = ({ checkboxHandler, item, index }) => {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => { checkboxHandler(index) }}
        />
        <span>{item.name}</span>
      </div>
    </li>
  );
};

export default TodoItem;
