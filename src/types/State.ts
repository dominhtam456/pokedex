import { Pokemon } from "./Pokemon";

export interface PokemonState {
    data: Pokemon[] | boolean
    status: boolean | Pokemon[]
}