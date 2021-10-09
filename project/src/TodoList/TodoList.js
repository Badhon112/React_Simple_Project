import React, { useState } from "react";
import TodoFrom from "./TodoFrom";
export default function TodoList() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s+$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    settodos(newTodos);
  };

  return (
    <div>
      <h1>Whats your plan in Today</h1>
      <TodoFrom onSubmit={addTodo} />
    </div>
  );
}
