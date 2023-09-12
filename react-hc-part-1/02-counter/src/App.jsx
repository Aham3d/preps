import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15; 
  
  let [counter, setCounter] = useState(0); 

  let add = () => {
    if(counter < 20) {
      setCounter(counter + 1);
    } else {
      counter = 20; 
    }
  }

  let remove = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    } else {
      counter = 0;
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
        onClick={add}
      >
        ADD
      </button>
      <button
        onClick={remove}
      >
        REMOVE
      </button>
    </>
  )
}

export default App