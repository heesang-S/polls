import { combineReducers } from 'redux';
import poll from './poll';

const rootReducer = combineReducers({
  poll,
});

export default rootReducer;
