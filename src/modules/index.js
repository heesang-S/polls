import { combineReducers } from 'redux';
import poll from './poll';
import auth from './auth';

const rootReducer = combineReducers({
  poll,
  auth,
});

export default rootReducer;
