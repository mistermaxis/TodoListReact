import React from "react";
import TodoList from "./todo-list";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { name: "Run", completed: false },
        { name: "Jump", completed: true },
        { name: "Walk", completed: false },
      ],
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
  }

  checkboxHandler(id) {
    const newArray = Array.from(this.state.todos);
    newArray[id].completed = !newArray[id].completed;
    this.setState({ todos: newArray });
  }

  render() {
    return (
      <div className="todo-container">
        <TodoList
          items={this.state.todos}
          checkboxHandler={this.checkboxHandler}
        ></TodoList>
      </div>
    );
  }
}

export default TodoContainer;
