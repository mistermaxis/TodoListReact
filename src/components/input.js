import React from "react";

const InputItem = ({ addItem }) => {
    function handleSubmit(event) {
        const newItem = {
            name: event.currentTarget.firstChild.value,
            completed: false,
        }

        addItem(newItem);
    }

    return (
        <form action="#" onSubmit={(e) => handleSubmit(e)}>
            <input type="text"/>
        </form>
    );
}
 
export default InputItem;