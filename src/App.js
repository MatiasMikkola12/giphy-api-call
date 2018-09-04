import React, { Component } from 'react';
import './App.css';
import Call from './components/Call.js';

class App extends Component {

  state = {
    inputValue: '',
    inputLimit: '',
    showComponent: false
  };

  updateInputValue = (evt) => {
    console.log(this.state.inputValue);
    this.setState({inputValue: evt.target.value});
  }

  updateInputLimit = (evt) => {
    console.log(this.state.inputLimit);
    this.setState({inputLimit: evt.target.value});
  }

  handleClick = () => {
    this.setState({showComponent: true});
  }

  render() {
    return (
      <div className="App">
        <h1>giphy</h1>
        <p>search keyword: <input value={this.state.inputValue} onChange={this.updateInputValue}></input></p>
        <p>amount of gifs shown: <input value={this.state.inputlimit} onChange={this.updateInputLimit}></input></p>
        <button onClick={this.handleClick}>show me the gifs</button>
        {
          this.state.showComponent && <Call word={this.state.inputValue} limit={this.state.inputLimit} />
        }
      </div>
    );
  }
}

export default App;
 