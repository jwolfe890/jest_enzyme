import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map'

class App extends Component {

  state = {
    stories: [{id: 1, title: "hello world", edit: false}, {id: 2, title: "hello world2", edit: true}, {id: 3, title: "hello world3", edit: false}]
  }

  handleToggle = (event) => {
      const index = this.state.stories.findIndex((story) => story.id == event.target.value);
      const foundStory = this.state.stories.find((story) => story.id == event.target.value)
    event.target.name == "Save" ? foundStory.edit = false : foundStory.edit = true
    debugger
    const updatedStories = [
      ...this.state.stories.slice(0, index),
      foundStory,
      ...this.state.stories.slice(index + 1)
    ];
    this.setState({
      stories: updatedStories
    }) 
  }

  handleDelete = (event) => {
    debugger
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
