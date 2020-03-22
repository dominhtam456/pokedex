import { Pokemon } from "../types/Pokemon"
import { GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL } from "../types/Const"

export const getPokemonRequest = ()=> {
    return {
        type: GET_POKEMON_REQUEST
    }
}

export const getPokemonSuccess = (listPokemon: Pokemon[], status: boolean) => {
    return {
        type: GET_POKEMON_SUCCESS,
        payload: listPokemon,
        status
    }
}

export const getPokemonFail = (status: boolean) => {
    return {
        type: GET_POKEMON_FAIL,
        status
    }
}