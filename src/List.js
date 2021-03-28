import React from "react";
import uuid from "react-uuid";
import Form from './Form';
import Row from "./Row";
import { Todo } from "./Todo";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: new Array(new Todo("Test-title", "Test-description")) };
  }

  addToList = (title, description) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, new Todo(title, description)]
    }))
  }

  render() {
    return (
      <div className="container">
        <h3 className="mt-5 mb-3">Todos</h3>
        <Form add={this.addToList} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(item => (
              <Row key={uuid()} title={item.title} description={item.description} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
