import React from 'react'

function TodoCount(props) {
  return (
    <div>
      total: {props.todos.length}
    </div>
  )
}

export default TodoCount