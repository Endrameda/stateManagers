import React from 'react';
import Task from "../task/Task";
import {useSelector} from "react-redux";
import {selectTodos} from "../../redux/todo/selectors";

const TaskList = () => {
    const todos = useSelector(selectTodos)

    return (
        <div className="divide-y">
            {todos.length
                ? todos.map(({title, id}) => <Task key={id} title={title}/>)
                : 'No data...'
            }
        </div>);
};

export default TaskList;
