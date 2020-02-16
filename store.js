import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { firebaseReducer } from 'react-redux-firebase';

const reducers = combineReducers({
  firebase: firebaseReducer,
});

export default (preloadedState = {}) => createStore(
  reducers,
  preloadedState,
  composeWithDevTools(applyMiddleware()),
);
