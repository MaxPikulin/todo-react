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
  saveToLocalStorage(state) {
    localStorage.setItem('todo', JSON.stringify(state));
  }
  loadFromLocalStorage() {
    let todoObject = localStorage.getItem('todo');
    return JSON.parse(todoObject);
  }
  handleInput(value) {
    this.setState({
      todoElements: this.state.todoElements.concat({taskText: value, ts: Date.now()}),
    }, () => {
      this.saveToLocalStorage(this.state);
    });
  }
  handleDelete(ts) {
    this.setState({
      todoElements: this.state.todoElements.filter((el) => el.ts !== ts),
    }, () => {
      this.saveToLocalStorage(this.state);
    });
  }
  componentWillMount() {
    this.setState(this.loadFromLocalStorage());
  }
  render() {
    return (
      <>
      <TodoInput handleInput={(value) => this.handleInput(value)}/>
      <TodoList todoElements={this.state.todoElements} handleDelete={(ts) => this.handleDelete(ts)}/>
      </>
    );
  }
}

export default App;