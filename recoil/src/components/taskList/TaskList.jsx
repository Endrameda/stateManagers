import React from 'react';
import {useRecoilValue} from "recoil";
import {taskListState} from "./task-list-state";
import Task from "../task/Task";
import AddTodo from "../addTask/AddTodo";

const TaskList = () => {
    const taskList = useRecoilValue(taskListState)

    return (
        <>
            {/* <TodoListStats /> */}
            {/* <TodoListFilters /> */}
            <AddTodo/>

            <div className="divide-y">
                {taskList.map((todoItem) => (
                    <Task key={todoItem.id} task={todoItem} item={todoItem}/>
                ))}
            </div>
        </>
    );
};

export default TaskList;
