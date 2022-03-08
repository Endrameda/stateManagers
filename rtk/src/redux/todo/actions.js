import {createAction} from "@reduxjs/toolkit";

export const addTodo = createAction('todo/addTodo', ({title, id}) => {

    return {
        payload: {
            title: title,
            id: id,
        }
    }
});

export const removeTodo = createAction('todo/removeTodo');
export const updateTodo = createAction('todo/updateTodo');
