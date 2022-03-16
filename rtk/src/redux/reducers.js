import todoReducer from "./todo/reducer";
import {pokemonApi} from "./pokeAPI";

const reducers = {
    todoReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
}

export default reducers
