import {Pokemon} from "./Pokemon";

export interface PokemonRequest {
    type: string
}

export interface PokemonSuccess {
    type: string,
    payload: Pokemon[],
    status: boolean
}

export interface PokemonFail {
    type: string,
    status: boolean 
}

export type PokemonAction = PokemonSuccess | PokemonRequest | PokemonFail