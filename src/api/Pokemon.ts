import axios from 'axios';

export const getAllPokemon = () => {
    return axios({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon",
        data: null
      })
}

export const getPokemonDescription = (id: number) => {
    axios({
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon-species/${id}`,
        data: null
      })
}