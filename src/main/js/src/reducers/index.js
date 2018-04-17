import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import bookReducer from './bookReducer'; 
import bookRowReduceder from './bookRowReducer'

// combining reducers
const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    books: bookReducer,
    bookRow: bookRowReduceder
});

export default rootReducer;