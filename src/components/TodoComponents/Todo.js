import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  render() {
    return (
      <div className={this.props.todo.completed ? "completed" : "notCompleted"}>
        {/* <h3>{this.props.todo.task}</h3> */}

        <ul onClick={() => this.props.markComplete(this.props.todo.id)}>
          {this.props.todo.task}
        </ul>
        {/* <input type="checkbox" onClick={event => this.markComplete(event)} /> */}

        {/* <button onClick={this.props.delTodo}>X</button> */}
      </div>
    );
  }
}
