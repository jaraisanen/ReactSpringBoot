import React, {Component} from 'react';
import './Login.css';

export default class Login extends Component {

  constructor(props) {
    super(props);
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
    fetch("http://localhost:8080/username=" + this.state.username + "&password=" + this.state.password, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body: JSON.stringify(this.state.username, this.state.password)
      })
      .then(function (response) {
        if (response.data.code === 200) {
          window.location('http://localhost:8080/books')
        } else {
          console.log(response.data.code)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="form-container">
        <h1>Login</h1>
        <form onClick={this.handleSubmit}>
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
