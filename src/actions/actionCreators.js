import axios from 'axios';
import * as types from './actionTypes';

export const fetchPokemonByType = type => dispatch => {
  const uri = `https://pokeapi.co/api/v2/type/${type}/`;

  axios.get(uri)
    .then(({ data }) => dispatch(addPokemonByType(data.pokemon)));
};


export const addPokemonByType = payload => ({
  type: types.ADD_POKEMON_BY_TYPE,
  payload,
});


export const filterPokemonByType = payload => ({
  type: types.FILTER_POKEMON_BY_TYPE,
  payload,
});

