import React, { Component } from "react";
import TodoElement from "../TodoElement/TodoElement";

class TodoList extends Component {
  render() {
    let todoElements = this.props.todoElements;
    let elements = todoElements.map((element) => 
      <TodoElement todoElement={element} />
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