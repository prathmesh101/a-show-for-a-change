import { applyMiddleware, combineReducers, createStore } from 'redux';

import logger from 'redux-logger';

import userReducer from './reducers/userReducer';

const error = (store) => (next) => (action) => {
  try{
    next(action);
  } catch(error) {
    console.log('error ', error);
  }
}

const middleware = applyMiddleware(error, logger);

const store = createStore(userReducer, middleware);

export default store;