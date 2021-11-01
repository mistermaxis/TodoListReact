import React from "react";
import TodoItem from "./todo-item";

const TodoList = (props) => {
    return (
        <ul>
            {
                props.items.map((item, index) => {
                    return <TodoItem checkboxHandler={props.checkboxHandler} key={index.toString()} item={item}></TodoItem>
                })
            }
        </ul>
    );
}
 
export default TodoList;