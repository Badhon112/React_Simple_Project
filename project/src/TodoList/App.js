import React, { Component } from "react";
// import TodoFrom from "./TodoFrom";
import TodoList from "./TodoList";
// import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <TodoFrom /> */}
        <TodoList />
      </div>
    );
  }
}
