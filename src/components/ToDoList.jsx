import React from "react";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: []
    };
  }

  //  this.setState( setState({
  //       item: state.item
  //     }));

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Todo list</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <button type="submit">Add</button>
        </form>

        <ul>
          <li>{this.setState.items}</li>
        </ul>

        <div>
          <button onClick={this.handleSubmit}>All</button>
          <button onClick={this.handleSubmit}>Done</button>
          <button onClick={this.handleSubmit}>Active</button>
        </div>
      </div>
    );
  }
}
