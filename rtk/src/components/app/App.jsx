import React from 'react';
import AddTodo from "../addTodo/AddTodo";
import TaskList from "../taskList/TaskList";
import {pokemonApi, useGetPokemonByNameQuery} from "../../redux/pokeAPI";
import {store} from "../../redux/store";

function App() {
    const hookState = useGetPokemonByNameQuery('bulbasaur');
    const state = pokemonApi.endpoints.getPokemonByName.useQueryState('bulbasaur');

    console.log('endpoints: ',  state)
    console.log('hookState: ',  hookState)
    // console.log('resultData: ',  resultData)
    // console.log('resultError: ',  resultError)
    // console.log('resultStatus: ',  resultStatus)

    // console.log('data: ', data)
    // console.log('isLoading: ', isLoading)
    // console.log('error: ', error)

    return (<div className="p-16 h-full">
            <div className="max-w-6xl ml-auto mr-auto shadow-2xl rounded-xl p-8">
                <AddTodo/>
                <TaskList/>
            </div>
        </div>);
}

export default App;
