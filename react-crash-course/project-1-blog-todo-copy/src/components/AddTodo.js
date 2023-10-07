import React from 'react'

function AddTodo(props) {
  function handleSubmit(e) {
    e.preventDefault(); 
    const todo = e.target.elements.todo.value; 
    props.setTodos(prevTodos => [...prevTodos, todo]);
    e.target.elements.todo.value = ' '; 
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' id='todo'/>
        <button type='submit'>
          Add
        </button>
      </form>
    </div>
  )
}

export default AddTodo