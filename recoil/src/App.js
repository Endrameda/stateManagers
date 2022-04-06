import {RecoilRoot} from "recoil";
import TaskList from "./components/taskList/TaskList";

function App() {
    return (
        <div className="p-16 h-full">
            <div className="max-w-6xl ml-auto mr-auto shadow-2xl rounded-xl p-8">
                <RecoilRoot>
                    <TaskList/>
                </RecoilRoot>
            </div>
        </div>
    );
}

export default App;
