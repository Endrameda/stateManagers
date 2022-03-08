import {createReducer} from "@reduxjs/toolkit";
import {addTodo} from "./actions";

const initialState = []

const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            const todo = action.payload;
            state.push(todo);
        })
})

export default todoReducer;
