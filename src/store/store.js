import { applyMiddleware, combineReducers, createStore } from 'redux';

import userReducer from './reducers/userReducer';

const error = store => next => action => {
  try {
    return next(action);
  } catch (error) {
    console.log('error ', error);
  }
};

const logger = store => next => action => {
  console.log('prev state', store.getState());
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const middleware = applyMiddleware(error, logger);

const store = createStore(userReducer, middleware);

export default store;
