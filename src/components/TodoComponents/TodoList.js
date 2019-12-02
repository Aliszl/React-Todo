// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    // map over array here.  Like with cards and conatiners

    return (
      <div>
        {this.props.todoList.map(todo => {
          return <Todo todo={todo} markComplete={this.props.markComplete} />;
        })}
      </div>
    );
  }
}
