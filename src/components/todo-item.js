import React from "react";

const TodoItem = ({ item, checkboxHandler }) => {
    return (
        <li>
            <div>
                <input type="checkbox" checked={item.completed} onChange={checkboxHandler}/>
                <span>{item.name}</span>
            </div>
        </li>
    );
}
 
export default TodoItem;