import React from 'react';
import Task from "../task/Task";

const TaskList = () => {
    return (<div className="divide-y">
            <Task title="Some Title 1"/>
            <Task title="Some Title 2"/>
        </div>);
};

export default TaskList;
