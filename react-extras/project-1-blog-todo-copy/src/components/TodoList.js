import React from 'react'

function TodoList(props) {

  let todo = props.todo; 

  function  deleteTodo(id) {
    props.setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  return (
    <ul>
      {
        props.todos.map((todo) => (
          <li key={todo}>
            {todo}
            <button key={todo} onClick={() => deleteTodo(todo.id)}>
              delete
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList