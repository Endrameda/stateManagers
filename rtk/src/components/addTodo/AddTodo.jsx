import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import Button from "../button/Button";
import './AddTodo.css';
import {addTodo} from "../../redux/todo/actions";
import {nanoid} from "nanoid";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const onClickButtonHandler = () => {
        if (title) {
            dispatch(addTodo({
                title: title,
                id: nanoid()
            }));

            setTitle('');
        }
    }

    return (<div className="add-todo-wrapper">
        <input
            type="text"
            className="add-todo-input"
            placeholder="Task name..."
            value={title}
            onChange={e => setTitle(e.target.value)}/>

        <Button
            disabled={!title}
            title="Add"
            onClickHandler={onClickButtonHandler}
            className="add-todo-button disabled:opacity-50"/>
    </div>);
};

export default AddTodo;
