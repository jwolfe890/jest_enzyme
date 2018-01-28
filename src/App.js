import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map'

class App extends Component {

  state = {
    stories: [{id: 1, title: "hello world", edit: false}, {id: 2, title: "hello world2", edit: true}, {id: 3, title: "hello world3", edit: false}]
  }

  render() {
    return (
      <div className="App">
        <Map stories={this.state.stories} handleSubmit={this.handleSubmit} handleToggle={this.handleToggle} handleSave={this.handleToggle} />
      </div>
    );
  }
}

export default App;
