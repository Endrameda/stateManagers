import {createAction, nanoid} from "@reduxjs/toolkit";


export const addTodo = createAction('todo/addTodo', ({title}) => ({
    payload: {
        title: title,
        id: nanoid(),
    }
}));

export const removeTodo = createAction('todo/removeTodo');
export const updateTodo = createAction('todo/updateTodo');
