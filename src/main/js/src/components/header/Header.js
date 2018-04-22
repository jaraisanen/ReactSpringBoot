import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    // switch navigation links arrcording to authentication
    navbarLinks() {
        if (this.props.authenticated) {
          return [
            <span key="home"><Link className="header-link" to="/books">Books</Link></span>,
            <span key="logout"><Link className="header-link" to="/logout">Logout</Link></span>
          ];
        }
        return [
          <span key="login"><Link className="header-link" to="/">Log in</Link></span>,
          //<li key="signup"><Link to="/signup">Sign up</Link></li>
        ];
      }
      render() {
        return (
          <nav className="navigation">
            <div className="container">
              <Link className="header-link" to="/"><span className="title">Bookstore</span></Link>
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