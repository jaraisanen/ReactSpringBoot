import React, {Component} from 'react';
import Books from './components/books/Books';
import AuthService from './components/utils/AuthService';
import withAuth from './components/utils/withAuth';
import './App.css';

const Auth = new AuthService();

class App extends Component {

  handleLogout = () => {
    Auth.logout()
    this.props.history.replace('/login');
 }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Logged in: {this.props.user}</h1>
          <button type="button" onClick={this.handleLogout}>Logout</button>
        </div>
        <Books/>
      </div>
    );
  }
}

export default withAuth(App);
