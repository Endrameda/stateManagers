import {createAction} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

export const addTodo = createAction('todo/addTodo', ({title}) => ({
    payload: {
        title: title,
        id: nanoid(),
    }
}));

export const removeTodo = createAction('todo/removeTodo');
export const updateTodo = createAction('todo/updateTodo');
