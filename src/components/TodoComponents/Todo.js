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
        <h3>task: {this.props.todo.task}</h3>
      </div>
    );
  }
}
