import { takeLatest, call, put } from "redux-saga/effects";
import { getAllPokemon, getPokemonDescription } from './../api/Pokemon'
import { GET_POKEMON_REQUEST, GET_POKEMON_FAIL, GET_POKEMON_SUCCESS } from '../types/Const';

function* PokemonListSaga() {
    try {
      
      const response = yield call(getAllPokemon);
      const data = response.data;
      
     console.log(data);
      // dispatch a success action to the store with the new dog
      yield put({ type: GET_POKEMON_SUCCESS, data });
 
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: GET_POKEMON_FAIL, error });
    }
  }

  export function* watcherPokemonListSaga() {
    yield takeLatest(GET_POKEMON_REQUEST, PokemonListSaga);
  }