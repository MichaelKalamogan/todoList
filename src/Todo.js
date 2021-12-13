import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeTask(this.props.id);
  }

  edit() {
    this.props.updateTask(this.props.id)
  }

  render() {
    return (
      <div>
        <h4>{this.props.todo}</h4> <h4>{this.props.due}</h4>
        <button onClick={this.handleClick}>X</button>
        <button onClick={this.edit}>edit</button>
      </div>
    );
  }
}

export default Todo;
