import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
});

export default (preloadedState = {}) => createStore(
  reducers,
  preloadedState,
  composeWithDevTools(applyMiddleware()),
);
