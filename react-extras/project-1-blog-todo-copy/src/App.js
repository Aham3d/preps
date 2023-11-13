import React from 'react'
import { useState } from 'react'
import TodoCount from './components/TodoCount'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {
  const [todos, setTodos] = useState(['itme 1', 'item 2', 'item 3']); 
  return (
    <div>
      <TodoCount todos={todos}/>
      <TodoList todos={todos}/>
      <AddTodo setTodos={setTodos}/>
    </div>
  )
}

export default App
// revise 14/11/23 - 5am