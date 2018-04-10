import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/user-authorization/Login';
import Logout from './components/user-authorization/Logout'
import App from './App';
import Authenticated from './components/user-authorization/Authenticated';
import NotAuthenticated from './components/user-authorization/NotAuthenticated';


const Routes = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={Authenticated(App)}/>
      <Route path="/login" component={NotAuthenticated(Login)}/>
      <Route path="/logout" component={Authenticated(Logout)}/>
    </Switch>
  </main>
)

export default Routes;