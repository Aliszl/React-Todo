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
  markComplete = event => {
    console.log(event.target);
    event.preventDefault();
    this.setState({
      todos: this.state.todoList.map(todo => {
        todo.completed = !todo.completed;

        return todo;
      })
    });
  };

  delTodo = id => {
    console.log(id);
    this.setState({
      todoList: [...this.state.todoList.filter(todo => todo.id !== id)]
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    console.log(this.state);
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
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
