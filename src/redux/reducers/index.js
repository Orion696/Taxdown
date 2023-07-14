import { combineReducers } from 'redux';

import authReducer from './authReducer';
import taxesReducer from './taxesReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  taxes: taxesReducer,
  form: formReducer,
});

export default rootReducer;
