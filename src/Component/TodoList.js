import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todoLists, clearList, handDelete, handCustom } = this.props;
    // console.log(todoLists);
    return (
      <ul className="list-group mt-5">
        <h3 className="text-center mb-3">Todo List</h3>
        {todoLists.map(listItem => {
          return (
            <TodoItem
              key={listItem.id}
              title={listItem.item}
              handDelete={() => handDelete(listItem.id)}
              handCustom={() => handCustom(listItem.id)}
            />
          );
        })}
        {/* {console.log(todoLists)} */}
        <button className="btn btn-block btn-danger mt-3" onClick={clearList}>
          Clear List
        </button>
      </ul>
    );
  }
}

export default TodoList;
