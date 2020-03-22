import { Pokemon } from '../types/Pokemon';
import { PokemonAction, PokemonSuccess, PokemonFail } from "../types/Action";
import { GET_POKEMON_REQUEST, GET_POKEMON_FAIL, GET_POKEMON_SUCCESS } from '../types/Const';
import { PokemonState } from '../types/State';

let initState: PokemonState = {
    data: [],
    status: false
};

const PokemonReducer = (state = initState, action: PokemonAction): PokemonState => {
    switch(action.type){
        case GET_POKEMON_SUCCESS:
            let pokemonSuccess: PokemonSuccess = action as PokemonSuccess;
            state.data = pokemonSuccess.payload;
            state.status = pokemonSuccess.status;
            console.log(state);
            return {...state};
        case GET_POKEMON_FAIL:
            let pokemonFail: PokemonFail = action as PokemonFail;
            state.status = pokemonFail.status;
            return {...state};
        default:
            return state;
    }
}

export default PokemonReducer;