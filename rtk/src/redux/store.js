import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from "redux-logger/src";
import reducers from "./reducers";
import {pokemonApi} from "./pokeAPI";

const logger = createLogger({
    collapsed: true,
    duration: false,
    timestamp: true,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(pokemonApi.middleware, logger)
    }
});
