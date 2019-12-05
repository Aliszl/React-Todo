import React from "react";

export default class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form onSubmit={event => this.props.handleSubmit(event)}>
            <input
              type="text"
              placeholder="...todo(from Todoform)"
              value={this.props.todoValue}
              onChange={event => this.props.handleChange(event)}
            />
            <button type="submit">Add Todo(from TodoForm)</button>
          </form>
        </div>
        <button>Clear Completed</button>
      </div>
    );
  }
}
