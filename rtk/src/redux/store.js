import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from "redux-logger/src";
import reducers from "./reducers";

const logger = createLogger({
    collapsed: true,
    duration: false,
    timestamp: true,
});

export const store = configureStore({
    reducer: reducers,
    middleware: [logger]
});
