import { all } from "redux-saga/effects";
import { watcherPokemonListSaga } from "./PokemonList";

export function* rootSaga() {
    yield all([
        watcherPokemonListSaga()
    ])
    // code after all-effect
  }
