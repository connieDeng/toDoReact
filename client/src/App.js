import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';

const initialState = {
}

class App extends Component {
  state = initialState;
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Express To Do List for WebDev</h1>
        </header>
        <Customers/>
      </div>
    );
  }
}

export default App;
