import React, {Component} from 'react';
import Books from './components/books/Books';
import Header from './components/header/header'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Books/>
      </div>
    );
  }
}

export default App;
