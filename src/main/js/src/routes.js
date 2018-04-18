import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/user-authorization/Login';
import Logout from './components/user-authorization/Logout'
import Books from './components/books/Books';
import NewBook from './components/books/NewBook';
import UserAuthentication from './components/user-authorization/UserAuthentication';
import NoUserAuthentication from './components/user-authorization/NoUserAuthentication';


const Routes = (props) => (
    <Switch>
      <Route exact path="/books" component={UserAuthentication(Books)}/>
      <Route exact path="/books/newbook" component={UserAuthentication(NewBook)}/>
      <Route exact path="/" component={NoUserAuthentication(Login)}/>
      <Route path="/logout" component={NoUserAuthentication(Logout)}/>
    </Switch>
)

export default Routes;