import React from 'react';
import Task from "../task/Task";
import {useSelector} from "react-redux";

const TaskList = () => {
    const todos = useSelector(state => state.todoReducer)

    return (<div className="divide-y">
            <Task title="Some Title 1"/>
            <Task title="Some Title 2"/>
        </div>);
};

export default TaskList;
