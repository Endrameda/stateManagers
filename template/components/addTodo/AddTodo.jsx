import React from 'react';
import Button from "../button/Button";
import './AddTodo.css';

const AddTodo = () => {

    const onClickButtonHandler = (event) => {
        console.log(event)
    }

    return (
        <div className="add-todo-wrapper">
            <input type="text" className="add-todo-input" placeholder="Task name..."/>
            <Button title="Add" onClickHandler={onClickButtonHandler} className="add-todo-button"/>
        </div>
    );
};

export default AddTodo;
