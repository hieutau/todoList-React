import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleInput, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body p-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                {/* <i className="fas fa-book"></i> */}@
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Add a Todo Item"
              value={item}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-success btn-block mt-3"
                : "btn btn-primary btn-block mt-3"
            }
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
