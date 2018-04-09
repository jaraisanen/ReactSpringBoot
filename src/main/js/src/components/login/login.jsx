import React, {Component} from 'react';
import AuthService from '../utils/AuthService'
import './Login.css';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {
      username: "",
      password: ""
    }
  }

  handleUsername = (event) => {
    this.setState({username: event.target.value});
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.Auth.login(this.state.username, this.state.password)
            .then(res => {
               this.props.history.replace('/');
            })
            .catch(err => {
              console.log(err)
            })
  }

  componentWillMount(){
    if(this.Auth.loggedIn())
        this.props.history.replace('/');
}


  render() {
    return (
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Username:
              <input type="text" value={this.state.username} onChange={this.handleUsername}/>
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePassword}/>
            </label>
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
