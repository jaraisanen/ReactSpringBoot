import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {logInAction} from '../../actions/authActions'
import { connect } from 'react-redux'
import './Login.css';

class Login extends Component {

  // fires action creator (username + password for token) 
  submit = (values) => {
    this.props.logInAction(values, this.props.history);
  }

  // receives error as a props from action
  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="error-message">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="form-container">
        <div className="container">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit(this.submit)}>
            <Field 
              name="username"
              component="input"
              type="text"
              placeholder="Username"/>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"/>
            <button type="submit" className="blue">Sign In</button>
          </form>
          {this.errorMessage()}
        </div>
      </div>
    );
  }
}

// access to Redux store (will be called every time store is updated)
function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

// connecting reduxFormLogin and Login component with action creators
const reduxFormLogin = reduxForm({form: 'login'})(Login);

export default connect(mapStateToProps, {logInAction})(reduxFormLogin);
