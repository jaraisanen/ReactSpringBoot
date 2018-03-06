import React, { Component } from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            passWord: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
