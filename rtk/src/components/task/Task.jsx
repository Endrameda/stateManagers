import React from 'react';
import Button from "../button/Button";

const Task = ({title}) => {
    return (
        <div className="flex justify-between py-8 first:pt-0 last:pb-0">
            <div className="text-gray-500">
                {title}
            </div>
            <div>
                <Button
                    title="Edit"
                    className="p-2 mr-5 text-sm text-blue-500 border border-solid border-2 border-blue-500 rounded-lg w-20
    hover:text-white hover:bg-blue-500 transition-colors"
                />
                <Button
                    title="Delete"
                    className="p-2 mr-5 text-sm text-orange-500 border border-solid border-2 border-orange-500 rounded-lg w-20
    hover:text-white hover:bg-orange-500 transition-colors"
                />
            </div>
        </div>
    );
};

export default Task;
