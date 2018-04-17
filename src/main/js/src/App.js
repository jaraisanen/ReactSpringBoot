import React from 'react';
import Header from './components/header/Header'
import './App.css';

const App = props => ({
  render() {
    return (
      <div className="App">
        <Header/>
        <main>{props.children}</main>
      </div>
    );
  }
});

export default App;
