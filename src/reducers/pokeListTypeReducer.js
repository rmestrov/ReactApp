import * as types from '../actions/actionTypes';

export default function typeReducer(state = [], action) {
  switch(action.type) {
    case types.ADD_POKEMON_BY_TYPE:
      return action.payload;

    default:
      return state;
  }

}