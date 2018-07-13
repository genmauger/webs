import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, NewEventForm } from './components/Events/EventNew'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewEventForm />
      </div>
    );
  }
}

export default App;