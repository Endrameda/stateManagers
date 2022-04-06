import React, {useState} from 'react';
import Button from "../button/Button";
import {useSetRecoilState} from "recoil";
import {taskListState} from "../taskList/task-list-state";
import {nanoid} from "nanoid";

import './AddTodo.css';

const AddTodo = () => {
    const [inputValue, setInputValue] = useState('')
    const setTaskList = useSetRecoilState(taskListState)

    const onChange = ({target: {value}}) => {
        setInputValue(value)
    }

    const addTask = () => {
        setTaskList((oldTodoList) => [...oldTodoList, {
            id: nanoid(), title: inputValue, isComplete: false,
        }])

        setInputValue('')
    }

    return (<div className="add-todo-wrapper">
        <input
            type="text"
            className="add-todo-input"
            value={inputValue}
            onChange={onChange}
            placeholder="Task name..."/>
        <Button
            title="Add" onClickHandler={addTask} className="add-todo-button"/>
    </div>);
};

export default AddTodo;
