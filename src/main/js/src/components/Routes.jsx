import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './login/Login';
import Books from './books/Books';


const Routes = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/books" component={Books}/>
    </Switch>
  </main>
)

export default Routes;