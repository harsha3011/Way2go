import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  Reducer as AuthenticationReducers
} from 'way2go-authentication';
export const reducers = {
    form:reduxFormReducer
};

const rootReducer = combineReducers(
    Object.assign({},
    reducers,
    AuthenticationReducers)
);

export default rootReducer;
