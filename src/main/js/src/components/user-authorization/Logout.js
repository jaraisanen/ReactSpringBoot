
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth/AuthActions'

class Logout extends Component {
  componentWillMount() {
    this.props.logOutAction();
  }

  render() {
    return <div className="centered-container">
    <p>Logged out succesfully</p>
    </div>
  }
}

export default connect(null, actions)(Logout);