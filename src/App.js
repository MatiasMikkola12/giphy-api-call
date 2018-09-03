import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>giphy</h1>
        <p>search keyword: <input></input></p>
        <p>amount of gifs shown: <input></input></p>
        <button>show me the gifs</button>
      </div>
    );
  }
}

export default App;
 