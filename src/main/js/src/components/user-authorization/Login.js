import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {logInAction} from '../../actions/auth/AuthActions'
import { connect } from 'react-redux'

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
          <p>{this.props.errorMessage}</p>
        </div>
      );
    }
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="centered-container">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit(this.submit)}>
            <div className="field-group">
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
            <button type="submit" className="green-button">Sign In</button>
            </div>
          </form>
          {this.errorMessage()}
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
