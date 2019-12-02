import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        { id: "1", name: "sweeping", completed: false },
        { id: "2", name: "mopping", completed: false },
        { id: "3", name: "washing dishes", completed: false }
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
    event.preventDefault();
    console.log(`I was clicked`, event);
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    console.log(this.state.todoList);
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoForm
          todoValue={this.state.todoValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList />
      </div>
    );
  }
}

export default App;
