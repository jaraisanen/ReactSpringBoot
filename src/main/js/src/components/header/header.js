import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    //
    navbarLinks() {
        if (this.props.authenticated) {
          return [
            <li key="home"><Link to="/">Books</Link></li>,
            <li key="logout"><Link to="/logout">Sign out</Link></li>
          ];
        }
        return [
          <li key="login"><Link to="/login">Log in</Link></li>,
          //<li key="signup"><Link to="/signup">Sign up</Link></li>
        ];
      }
      render() {
        return (
          <nav className="navbar">
            <div className="container">
              <Link to="/"><span className="brand">Auth-app</span></Link>
              <ul>
                {this.navbarLinks()}
              </ul>
            </div>
          </nav>
        );
      }
}

function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }
  
  export default connect(mapStateToProps)(Header);