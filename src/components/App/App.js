import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Feeling/>
        <br/>
      </div>
    );
  }
}

export default App;
