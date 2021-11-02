import React from 'react'; // eslint-disable-line no-unused-vars
import TodoList from './todo-list.js'; // eslint-disable-line no-unused-vars
import InputItem from './input.js' // eslint-disable-line no-unused-vars

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  checkboxHandler(id) {
    const newArray = Array.from(this.state.todos);
    newArray[id].completed = !newArray[id].completed;
    this.setState({ todos: newArray });
  }

  addItem(item) {
    this.setState({ todos: [...this.state.todos, item] })
  }

  removeItem(id) {
    const tempArray = Array.from(this.state.todos);
    const newArray = tempArray.filter((item, index) => {
      return index !== id;
    });

    this.setState({ todos: newArray });
  }

  render() {
    return (
      <div className="todo-container">
        <InputItem addItem={this.addItem} />
        <TodoList
          items={this.state.todos}
          checkboxHandler={this.checkboxHandler}
          removeItem={this.removeItem}
        ></TodoList>
      </div>
    );
  }
}

export default TodoContainer;
