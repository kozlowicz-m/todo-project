import React from "react";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.currentId = 0;

    this.state = {
      activeFilter: "active",
      list: []
    };
  }

  addItem = event => {
    event.preventDefault();

    const { value } = this.input.current;

    if (!value) return;

    this.input.current.value = "";

    this.setState({
      list: [
        ...this.setState.list,
        {
          value,
          active: true,
          id: this.currentId++
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <h1>Todo list</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.myRef} />
          <button type="submit"> Add </button>
        </form>

        <ul>
          {this.state.list
            .filer(item => {
              switch (activeFilter) {
                case "active":
                  return cos;
                  break;
                case "done":
                  return cos;
                  break;
                default:
                  return true;
              }
            })
            .map(item => (
              <li key={cos} onClick={cos} className={cos}>
                {cos}
              </li>
            ))}
        </ul>

        <div>
          <button onClick={this.cos} className="btn">
            {" "}
            All{" "}
          </button>
          <button onClick={this.cos} className="btn">
            {" "}
            Done{" "}
          </button>
          <button onClick={this.cos} className="btn">
            {" "}
            Active{" "}
          </button>
        </div>
      </div>
    );
  }
}
