import React from 'react'; // eslint-disable-line no-unused-vars

const InputItem = ({ addItem }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      name: event.currentTarget.firstChild.value,
      completed: false,
    };

    addItem(newItem);
    event.currentTarget.firstChild.value = '';
  }

  return (
    <form action="#" onSubmit={(e) => handleSubmit(e)}>
      <input placeholder="Add your tasks here" type="text" />
    </form>
  );
};

export default InputItem;
