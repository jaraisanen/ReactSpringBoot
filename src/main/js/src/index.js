import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Routes from './routes'
import reducers from './reducers/index';
import { AUTHENTICATED } from './actions/authActions';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');

// if user returns true, dispach user to be authenticated
if (user) {
    store.dispatch({ type: AUTHENTICATED });
  }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
