import React, { useState } from 'react'

const App = () => {
  const [newItem, setNewItem] = useState("")

  const [todos, setTodos] = useState("")

  function handleSubmit(e) {
    e.preventDefault(); 

    setTodos(currentTodos =>  {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title: newItem, completed:false},
      ]
    })
    setNewItem("")
  }


  return (
    <>
      <form className='new-item-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='item'>
            New item  
          </label>
          <input 
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type='text'
            id='item'
          />
        </div>
        <button 
          className='btn'>
          Add
        </button>
      </form>
      <h1 className='header'>
        Todo List
      </h1>
      <ul className='list'>
        <li>
          <label>
            <input type="checkbox"/>
            todo
          </label>
          <button className='btn delete'>
            delete
          </button>
        </li>  
      </ul>
    </>
  )
}

export default App