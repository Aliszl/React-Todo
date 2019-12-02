import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // todoList: [],
      todoList: [
        { id: "1", task: "sweeping", completed: false },
        { id: "2", task: "mopping", completed: false },
        { id: "3", task: "washing dishes", completed: false }
      ],

      todoValue: ""
    };
  }
  handleChange = event => {
    this.setState({
      todoValue: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.todoValue,
          id: Date.now(),
          completed: false
        }
      ],
      todoValue: ""
    });
    // console.log(this.state.todoList);
  };
  markComplete = id => {
    // console.log('From App.js')
    // console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    // console.log(this.state.todoList);
    // console.log(this.state.todoValue);
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoForm
          todoValue={this.state.todoValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          todoList={this.state.todoList}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
