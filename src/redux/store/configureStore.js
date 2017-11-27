import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore(intialState){
    return createStore(
      rootReducer,
      intialState,
      applyMiddleware(logger, thunk, reduxImmutableStateInvariant())  
    );
}