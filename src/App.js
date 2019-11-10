import React, { Component } from "react";
import "./App.css";
import uuid from "uuid/v1";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./Component/TodoList";
import TodoInput from "./Component/TodoInput";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  // INPUT ---------->
  handleInput = e => {
    this.setState({ item: e.target.value });
  };
  // SUBMIT ---------->
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      item: this.state.item
    };
    // console.log(newItem);
    const updateItems = [...this.state.items, newItem];
    // console.log(updateItems);
    this.setState({
      items: updateItems,
      item: "",
      id: uuid(),
      editItem: false
    });
    // console.log(this.state.items);
    // console.log(this.state);
  };
  // CLEAN ALL ---------->
  cleanList = () => {
    this.setState({
      items: []
    });
    console.log(this.state);
  };
  // DELETE ITEM ---------->
  handDelete = id => {
    const filterItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filterItems });
  };
  // CUSTOM ITEM ---------->
  handCustom = id => {
    const inputCustom = this.state.items.find(item => id === item.id);
    // console.log(inputCustom);

    const filterCustom = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filterCustom,
      item: inputCustom.item,
      id: id,
      editItem: true
    });

    // console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-10 mx-auto mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleInput={this.handleInput}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              todoLists={this.state.items}
              clearList={this.cleanList}
              handDelete={this.handDelete}
              handCustom={this.handCustom}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
