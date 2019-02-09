import React, { Component } from "react";
import TodoElement from "../TodoElement/TodoElement";
import './TodoList.css';

class TodoList extends Component {
  render() {
    let todoElements = this.props.todoElements;
    let elements = todoElements.map((element) => 
      <TodoElement key={element.ts} todoElement={element} handleDelete={this.props.handleDelete}/>
    );
    elements = elements.reverse();
    return (
      <ul>
        {elements}
      </ul>
    );
  }
}

export default TodoList;