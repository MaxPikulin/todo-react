import React, { Component } from 'react';

class TodoInput extends Component {
  handleInput(e) {
    if(!e.keyCode || e.keyCode === 13) {
      this.props.handleInput(this._input.value);
      this._input.value = '';
      this._input.focus();
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