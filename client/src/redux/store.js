import {createStore,applyMiddleware,compose } from'redux';
import videogameReducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  const store = createStore(videogameReducer, composeEnhancer(applyMiddleware(thunkMiddleware)));
  export default store