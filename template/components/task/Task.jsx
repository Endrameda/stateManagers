import React from 'react';
import Button from "../button/Button";

const Task = ({title}) => {
    return (
        <div className="flex justify-between py-8 first:pt-0 last:pb-0">
            <div>
                {title}
            </div>
            <div>
                <Button title="Edit"/>
                <Button title="Delete"/>
            </div>
        </div>
    );
};

export default Task;
