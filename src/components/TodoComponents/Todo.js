import React from "react";

export default class Todo extends React.Component {
  strikeThrough = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: "line-through"
      };
    } else {
      return {
        textDecoration: "none"
      };
    }
  };

  render() {
    return (
      <div>
        {/* <h3>{this.props.todo.task}</h3> */}
        <ul onClick={event => this.props.markComplete(event)}>
          {this.props.todo.completed
            ? this.props.todo.task.strike()
            : this.props.todo.task}
        </ul>
        {/* <input type="checkbox" onClick={event => this.markComplete(event)} /> */}

        {/* <button onClick={this.props.delTodo}>X</button> */}
      </div>
    );
  }
}
