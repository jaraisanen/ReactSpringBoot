import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './login/Login';
import App from '../App';


const Routes = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </main>
)

export default Routes;