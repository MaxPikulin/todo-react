import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return (
      <div className="TodoInput">
        <input type="text"/>
        <button>Add</button>
      </div>
    );
  }
}

export default TodoInput;