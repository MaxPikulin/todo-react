import React, { Component } from 'react';
import './App.css';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoElements: [],
    }
  }
  handleInput(value) {
    this.setState({
      todoElements: this.state.todoElements.concat(value),
    });
  }
  render() {
    return (
      <>
      <TodoInput handleInput={(value) => this.handleInput(value)}/>
      <TodoList todoElements={this.state.todoElements}/>
      </>
    );
  }
}

export default App;