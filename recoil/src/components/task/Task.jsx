import React from 'react';
import Button from "../button/Button";
import {useRecoilState} from "recoil";
import {taskListState} from "../taskList/task-list-state";
import {replaceItemAtIndex} from "./utils";

const Task = ({item}) => {
    const {title, isComplete} = item;
    const [taskList, setTaskList] = useRecoilState(taskListState);
    const index = taskList.findIndex((listItem) => listItem === item);

    const editItemTitle = ({target: {value}}) => {
        const newList = replaceItemAtIndex(taskList, index, {
            ...item,
            title: value
        })

        setTaskList(newList)
    }

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(taskList, index, {
            ...item,
            isComplete: !isComplete,
        })

        setTaskList(newList);
    }

    return (
        <div className="flex justify-between py-8 first:pt-0 last:pb-0">
            <div>
                <input type="text" value={title} onChange={editItemTitle}/>
            </div>

            <div className="flex items-center">
                <input className="mr-5 w-5 h-5 rounded-xl" type="checkbox" checked={isComplete} onChange={toggleItemCompletion}/>
                <Button
                    title="Delete"
                    className="p-2 text-sm text-orange-500 border border-solid border-2 border-orange-500 rounded-lg w-20
    hover:text-white hover:bg-orange-500 transition-colors"
                />
            </div>
        </div>
    );
};

export default Task;
