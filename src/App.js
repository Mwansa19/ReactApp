import React, { Component } from 'react';
import logo from './logo.svg';
import Project from './WebProj';
import Web from './webreact';
import Footer from './learn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Project/>
      <Web/>
      <Footer/>
      </div>
    );
  }
}

export default App;
