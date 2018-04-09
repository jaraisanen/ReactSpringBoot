import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
