import { createSlice } from '@reduxjs/toolkit';

export  const slice = createSlice({
    name:'pokemons',
    initialState:{
        isLoading:false,
        data:{},
        error:null
    },
    reducers:{
        getPokemonss:(state,action)=>({
            ...state,
            data:action.payload,

        }),
        pokemonsLoading:(state,action)=>({
            ...state,
            isLoading:action.payload,

        })
    }
})
export const { getPokemonss,pokemonsLoading } = slice.actions;
export const selectPokemonsLoading = state => state.pokemons.isLoading;
export const selectPokemonsData = state => state.pokemons.data;
export default slice.reducer;