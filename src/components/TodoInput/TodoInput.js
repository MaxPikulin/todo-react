import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
  }
  
  handleInput(e) {
    if(!e.keyCode || e.keyCode === 13) {
      this.props.handleInput(this._input.value);
    }
  }

  render() {
    return (
      <div className="TodoInput">
        <input ref={(el) => this._input = el} onKeyUp={(e) => this.handleInput(e)} type="text" />
        <button onClick={(e) => this.handleInput(e)} >Add</button>
      </div>
    );
  }
}

export default TodoInput;