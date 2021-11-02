import React from 'react'; // eslint-disable-line no-unused-vars

const TodoItem = ({
  checkboxHandler, removeItem, item, index,
}) => {
  function handleClick() {
    removeItem(index);
  }

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            checkboxHandler(index);
          }}
        />
        <span>{item.completed ? <s>{item.name}</s> : item.name}</span>
        <button type="button" onClick={handleClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
