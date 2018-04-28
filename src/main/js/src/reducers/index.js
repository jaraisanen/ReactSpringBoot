import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import BookReducer from './BookReducer'; 
import NewBookReducer from './NewBookReducer';

// combining reducers
const rootReducer = combineReducers({
    form: FormReducer,
    auth: AuthReducer,
    books: BookReducer,
    newBook: NewBookReducer,
    router: routerReducer
});

export default rootReducer;