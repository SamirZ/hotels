import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { auth } from './auth';
import { hotels, hotelsReviews } from './hotels';

const rootReducer = combineReducers({
  auth,
  hotels,
  hotelsReviews,
  form: formReducer
});

export default rootReducer;
