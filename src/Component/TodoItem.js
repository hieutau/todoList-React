import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, handDelete, handCustom } = this.props;
    return (
      <div>
        <li className="list-group-item text-capitalize d-flex justify-content-between m-2">
          <h6 className="title m-0">{title}</h6>
          <div className="todo-icon">
            <span className="text-success mx-2" onClick={() => handCustom()}>
              <i className="fas fa-pen-alt"></i>
            </span>
            <span className="text-danger mx-2" onClick={() => handDelete()}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
