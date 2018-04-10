import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';

// combining reducers
const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer
});

export default rootReducer;