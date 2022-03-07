import React from 'react';
import AddTodo from "../addTodo/AddTodo";
import TaskList from "../taskList/TaskList";

function App() {
  return (
    <div className="p-16 h-full">
        <div className="max-w-6xl ml-auto mr-auto shadow-2xl rounded-xl p-8">
            <AddTodo />
            <TaskList/>
        </div>
    </div>
  );
}

export default App;
