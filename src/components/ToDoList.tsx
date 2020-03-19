import * as React from "react";

import { IToDoList } from "../interfaces/IToDoList";

export class ToDoList extends React.Component<IToDoList> {
  input: any;
  currentId: any;

  // constructor(props: any) {
  //   super(props);
  //
  //   this.input = React.createRef();
  //   this.currentId = 0;
  //
  //   this.state = {
  //     list: [],
  //     activeFilter: "all"
  //   };
  // }
  //
  // addItem = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //
  //   const { value } = this.input.current;
  //
  //   if (!value) return;
  //
  //   this.input.current.value = "";
  //
  //   this.setState({
  //     list: [
  //       ...this.state.list,
  //       {
  //         value,
  //         active: true,
  //         id: this.currentId++
  //       }
  //     ]
  //   });
  // };
  //
  // itemClick = (id: any) => () => {
  //   const itemIndex = this.state.list.findIndex(item => item.id === id);
  //   const item = this.state.list[itemIndex];
  //
  //   this.setState(myState => ({
  //     list: [
  //       ...myState.list.slice(0, itemIndex),
  //       {
  //         ...item,
  //         active: !item.active
  //       },
  //       ...myState.list.slice(itemIndex + 1)
  //     ]
  //   }));
  // };
  //
  // setFilter = (type: any) => () => {
  //   this.setState({
  //     activeFilter: type
  //   });
  // };

  render() {
    const { activeFilter } = this.state;

    return (
      <div className="todo-list-app">
        <h1 className="name">TO-DO LIST</h1>

        <div className="buttons">
          <button onClick={this.setFilter("all")} className="btn">
            All
          </button>
          <button onClick={this.setFilter("active")} className="btn">
            Active
          </button>
          <button onClick={this.setFilter("done")} className="btn">
            Done
          </button>
        </div>

        <form onSubmit={this.addItem}>
          <input type="text" ref={this.input} className="input" />
          <button type="submit" className="submit">
            Add
          </button>
        </form>

        <ul>
          {this.state.list
            .filter(item => {
              switch (activeFilter) {
                case "active":
                  return item.active;
                case "done":
                  return !item.active;
                default:
                  return true;
              }
            })
            .map(item => (
              <li
                key={item.id}
                onClick={this.itemClick(item.id)}
                className={item.active ? "active" : "done"}
              >
                {item.value}
              </li>
            ))}
        </ul>

      </div>
    );
  }
}

export default ToDoList;
