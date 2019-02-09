import React, { Component } from 'react';
import './TodoElement.css';

class TodoElement extends Component {
  render() {
    let todoElement = this.props.todoElement;
    return (
      <li onClick={() => this.props.handleDelete(todoElement.ts)}>{todoElement.taskText}</li>
    );
  }
}

export default TodoElement;