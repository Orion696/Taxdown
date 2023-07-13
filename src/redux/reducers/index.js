import { combineReducers } from 'redux';

import authReducer from './authReducer';
import taxesReducer from './taxesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  taxes: taxesReducer,
});

export default rootReducer;