
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://pokeapi.co/api/v2/'
        }
    ),
    tagTypes: ['Pokemon'],
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
            transformResponse: (response, error, id) =>
                response,
            providesTags: (result, error, id) => [
                {type: 'Pokemon', id}]
        }),
    }),
})

export const { useGetPokemonByNameQuery } = pokemonApi
