
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class Logout extends Component {
  componentWillMount() {
    this.props.logOutAction();
  }

  render() {
    return <div className="content">Logged out succesfully</div>
  }
}

export default connect(null, actions)(Logout);