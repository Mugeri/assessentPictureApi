import React, { Component } from 'react';
import './App.css';
import Home from './component/Home.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Watch the photos</h2>
        </div>
        <p className="App-intro">
          <Home />
        </p>
      </div>
    );
  }
}

export default App;
