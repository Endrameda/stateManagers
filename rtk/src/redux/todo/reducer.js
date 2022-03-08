import {createReducer} from "@reduxjs/toolkit";
import {addTodo} from "./actions";

const initialState = [{
    title: 'Some title...',
    id: 123141
}]

const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            console.log('action: ', action)
            console.log('state: ', state)
        })
})

export default todoReducer;
