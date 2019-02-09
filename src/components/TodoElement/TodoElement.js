import React, { Component } from 'react';

class TodoElement extends Component {
  render() {
    let todoElement = this.props.todoElement;
    return (
      <li>{todoElement}</li>
    );
  }
}

export default TodoElement;