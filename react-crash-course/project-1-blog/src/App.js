import React from "react";
import { useState } from "react";
import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {

  const [todos, setTodos] = useState(['item a', 'item 2', 'item 3']);

  return (
    <>
      <TodoCount todos={todos}/>
      <TodoList todos={todos}/>
      <AddTodo setTodos={setTodos}/>
    </>
  )

}

export default App;