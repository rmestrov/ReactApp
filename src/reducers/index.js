import { combineReducers } from 'redux';
import filter from './pokeFilterReducer';
import type from './pokeListTypeReducer';

const rootReducer = combineReducers({
  filter,
  type,
});

export default rootReducer;